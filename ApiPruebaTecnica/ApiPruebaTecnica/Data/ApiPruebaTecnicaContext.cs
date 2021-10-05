using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiPruebaTecnica.Models;

namespace ApiPruebaTecnica.Data
{
    public class ApiPruebaTecnicaContext : DbContext
    {
        public ApiPruebaTecnicaContext (DbContextOptions<ApiPruebaTecnicaContext> options)
            : base(options)
        {
        }

        public DbSet<ApiPruebaTecnica.Models.Persona> Persona { get; set; }

        public DbSet<ApiPruebaTecnica.Models.Ciudad> Ciudad { get; set; }

        public DbSet<ApiPruebaTecnica.Models.Comuna> Comuna { get; set; }

        public DbSet<ApiPruebaTecnica.Models.Region> Region { get; set; }
    }
}
