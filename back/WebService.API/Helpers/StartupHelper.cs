using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebService.Core.Interfaces;
using WebService.Core.Services;
using WebService.Domain.Interfaces;
using WebService.Infrastructure.DataAccess;

namespace WebService.API.Helpers
{
    public static class StartupHelper
    {
        public static void AddServices(this IServiceCollection services)
        {
            //DependencyInjection
            //Services
            services.AddScoped<IPersonaService, PersonaService>();
            services.AddScoped<IComunaService, ComunaService>();
            services.AddScoped<ICuidadService, CuidadService>();
            services.AddScoped<IRegionService, RegionService>();
            services.AddScoped<ISexoService, SexoService>();
            //Repositorys
            services.AddScoped<IPersonaRepository, PersonaRepository>();
            services.AddScoped<IComunaRepository, ComunaRepository>();
            services.AddScoped<ICuidadRepository, CuidadRepository>();
            services.AddScoped<IRegionRepository, RegionRepository>();
            services.AddScoped<ISexoRepository, SexoRepository>();
        }
    }
}
