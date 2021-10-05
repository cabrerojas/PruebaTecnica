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
    public class ComunasController : ControllerBase
    {
        private readonly ApiPruebaTecnicaContext _context;

        public ComunasController(ApiPruebaTecnicaContext context)
        {
            _context = context;
        }

        // GET: api/Comunas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comuna>>> GetComuna()
        {
            return await _context.Comuna.ToListAsync();
        }

        // GET: api/Comunas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comuna>> GetComuna(short id)
        {
            var comuna = await _context.Comuna.FindAsync(id);

            if (comuna == null)
            {
                return NotFound();
            }

            return comuna;
        }

        // PUT: api/Comunas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComuna(short id, Comuna comuna)
        {
            if (id != comuna.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(comuna).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComunaExists(id))
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

        // POST: api/Comunas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Comuna>> PostComuna(Comuna comuna)
        {
            _context.Comuna.Add(comuna);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComuna", new { id = comuna.Codigo }, comuna);
        }

        // DELETE: api/Comunas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComuna(short id)
        {
            var comuna = await _context.Comuna.FindAsync(id);
            if (comuna == null)
            {
                return NotFound();
            }

            _context.Comuna.Remove(comuna);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComunaExists(short id)
        {
            return _context.Comuna.Any(e => e.Codigo == id);
        }
    }
}
