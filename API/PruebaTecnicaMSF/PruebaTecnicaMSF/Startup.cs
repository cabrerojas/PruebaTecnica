using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
using PruebaTecnicaMSF.Models;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaMSF.Services.Interfaces;
using PruebaTecnicaMSF.Services;
using Newtonsoft.Json;

namespace PruebaTecnicaMSF
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        private readonly string _corsPolicyName = "CorsAllowSpecificOrigins";

        public Startup(Microsoft.AspNetCore.Hosting.IHostingEnvironment environment)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(environment.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", reloadOnChange: true, optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddMvc()
                .AddNewtonsoftJson(options => options.SerializerSettings.Formatting = Formatting.Indented);

            string[] CORS_ORIGIN_URLS = Configuration.GetSection("AppSettings:CORS_ORIGIN_URLS").Get<string[]>();


            //services
            //    .AddMvc()
            //    .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
            //    .AddJsonOptions(options =>
            //    {
            //        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            //    });

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

            services.AddCors(options =>
            {
                options.AddPolicy(
                    _corsPolicyName,
                    builder =>
                    {
                        builder
                            .WithOrigins(CORS_ORIGIN_URLS)
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                    });
            });

            services.AddDbContext<PruebaTecnicaMSFContext>(options =>
                                                       options
                                                       .UseSqlServer(Configuration.GetConnectionString("PruebaTecnicaConnection"))
                                                       .UseLazyLoadingProxies());

            services.AddControllers();

            services.AddSwaggerGen();

            ConfigureDependencies(services);
        }

        private void ConfigureDependencies(IServiceCollection services)
        {
            services.AddTransient<IPersonaService, PersonaService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();

            app.UseSwaggerUI(c =>
           {
               c.SwaggerEndpoint("/swagger/v1/swagger.json", "Prueba Tecnica MultiSF");
               c.RoutePrefix = string.Empty;
           });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(_corsPolicyName);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
