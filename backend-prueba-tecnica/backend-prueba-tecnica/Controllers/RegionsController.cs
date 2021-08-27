using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend_prueba_tecnica.Models;

namespace backend_prueba_tecnica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionsController : ControllerBase
    {
        private readonly PruebaTecnicaContext _context;

        public RegionsController(PruebaTecnicaContext context)
        {
            _context = context;
        }

        // GET: api/Regions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Region>>> GetRegions()
        {
            return await _context.Regions.ToListAsync();
        }

        // GET: api/Regions/regionCodigo
        [HttpGet("{regionCodigo}")]
        public async Task<ActionResult<IEnumerable<Ciudad>>> GetCities(int regionCodigo)
        {
            return await _context.Ciudads.Where(x => x.RegionCodigo == regionCodigo).ToListAsync();
        }

        // GET: api/Regions/regionCodigo/city/
        [HttpGet("{regionCodigo}/city/{ciudadCodigo}")]
        public async Task<ActionResult<IEnumerable<Comuna>>> GetCommunes(int regionCodigo,int ciudadCodigo)
        {
            return await _context.Comunas.Where(x => x.RegionCodigo == regionCodigo && x.CiudadCodigo == ciudadCodigo).ToListAsync();
        }


    }
}
