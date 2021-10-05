using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiPruebaTecnica.Data;
using ApiPruebaTecnica.Models;

namespace ApiPruebaTecnica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiudadsController : ControllerBase
    {
        private readonly ApiPruebaTecnicaContext _context;

        public CiudadsController(ApiPruebaTecnicaContext context)
        {
            _context = context;
        }

        // GET: api/Ciudads
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ciudad>>> GetCiudad()
        {
            return await _context.Ciudad.ToListAsync();
        }

        // GET: api/Ciudads/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ciudad>> GetCiudad(short id)
        {
            var ciudad = await _context.Ciudad.FindAsync(id);

            if (ciudad == null)
            {
                return NotFound();
            }

            return ciudad;
        }

        // PUT: api/Ciudads/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCiudad(short id, Ciudad ciudad)
        {
            if (id != ciudad.RegionCodigo)
            {
                return BadRequest();
            }

            _context.Entry(ciudad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CiudadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ciudads
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ciudad>> PostCiudad(Ciudad ciudad)
        {
            _context.Ciudad.Add(ciudad);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCiudad", new { id = ciudad.RegionCodigo }, ciudad);
        }

        // DELETE: api/Ciudads/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCiudad(short id)
        {
            var ciudad = await _context.Ciudad.FindAsync(id);
            if (ciudad == null)
            {
                return NotFound();
            }

            _context.Ciudad.Remove(ciudad);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CiudadExists(short id)
        {
            return _context.Ciudad.Any(e => e.RegionCodigo == id);
        }
    }
}
