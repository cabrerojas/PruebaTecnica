using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MultiBackend.IServices;
using MultiBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiBackend.Services
{
    public class RegionService : IRegionService
    {
        BD_MULTIContext _context;
        private readonly ILogger<RegionService> _logger;

        public RegionService(BD_MULTIContext context, ILogger<RegionService> logger) {
            _context = context;
            _logger = logger;
        }
        public IEnumerable<Region> GetRegiones()
        {
            var regiones = _context.Regions.ToList();
            return regiones;
        }

        public IEnumerable<Ciudad> GetCiudades()
        {
            var ciudades = _context.Ciudads.ToList();
            return ciudades;
        }

        public IEnumerable<Comuna> GetComunas()
        {
            var Comuna = _context.Comunas.ToList();
            return Comuna;
        }
    }
}
