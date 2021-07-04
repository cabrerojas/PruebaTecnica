using PruebaTecnicaMSF.Models;
using PruebaTecnicaMSF.Services.Interfaces;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using PruebaTecnicaMSF.Models.Request;

namespace PruebaTecnicaMSF.Services
{
    public class PersonaService : IPersonaService
    {
        private readonly PruebaTecnicaMSFContext _context;


        public PersonaService(PruebaTecnicaMSFContext context)
        {
            _context = context;
        }

        public async Task<List<Persona>> GetAllPersonasAsync()
        {
            var personas = await _context.Personas.Include(x => x.SexoCodigoNavigation).Include(x => x.Comuna).ToListAsync();
            return personas;
        } 

        public async Task<List<Region>> GetAllRegionesAsync()
        {
            var regiones = await _context.Regions
                .Include(x => x.Ciudads)
                .ToListAsync();

            return regiones;
        }

        public async Task<Persona> GetByIdAsync(Guid id)
        {
            var persona = await _context.Personas.Include(x => x.SexoCodigoNavigation).Include(x => x.Comuna).Where(x => x.Id == id).FirstOrDefaultAsync();
            return persona;
        }

        public async Task<Persona> DeleteByIdAsync(Guid id)
        {
            var persona = await _context.Personas.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (persona != null)
            {
                _context.Personas.Remove(persona);
                await _context.SaveChangesAsync();
            }
            return persona;
        }

        public async Task<Persona> CreateAsync(PersonaRequest request)
        {
            try
            {
                var persona = new Persona
                {
                    Id = Guid.NewGuid(),
                    ApellidoMaterno = request.ApellidoMaterno,
                    ApellidoPaterno = request.ApellidoPaterno,
                    CiudadCodigo = request.CiudadCodigo,
                    ComunaCodigo = request.ComunaCodigo,
                    Direccion = request.Direccion,
                    Email = request.Email,
                    FechaNacimiento = request.FechaNacimiento,
                    Nombre = request.Nombre,
                    Nombres = request.Nombres,
                    Observaciones = request.Observaciones,
                    RegionCodigo = request.RegionCodigo,
                    Run = request.Run,
                    RunCuerpo = request.RunCuerpo,
                    RunDigito = request.RunDigito,
                    SexoCodigo = request.SexoCodigo,
                    Telefono = request.Telefono
                };
               await _context.Personas.AddAsync(persona);
               await _context.SaveChangesAsync();

               return persona;
            }
            catch (Exception ex)
            {
                //SHOULD HANDLE EXCEPTION HERE
                return null;
            }
        }

        public async Task<Persona> UpdateAsync(Guid id, PersonaRequest persona)
        {
            var personaDb = await _context.Personas.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (personaDb != null)
            {
                personaDb.ApellidoMaterno = persona.ApellidoMaterno;
                personaDb.ApellidoPaterno = persona.ApellidoPaterno;
                personaDb.CiudadCodigo = persona.CiudadCodigo;
                personaDb.ComunaCodigo = persona.ComunaCodigo;
                personaDb.Direccion = persona.Direccion;
                personaDb.Email = persona.Email;
                personaDb.FechaNacimiento = persona.FechaNacimiento;
                personaDb.Nombre = persona.Nombre;
                personaDb.Nombres = persona.Nombres;
                personaDb.Observaciones = persona.Observaciones;
                personaDb.RegionCodigo = persona.RegionCodigo;
                personaDb.Run = persona.Run;
                personaDb.RunCuerpo = persona.RunCuerpo;
                personaDb.RunDigito = persona.RunDigito;
                personaDb.SexoCodigo = persona.SexoCodigo;
                personaDb.Telefono = persona.Telefono;

                _context.Entry(personaDb).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return personaDb;
            }
            else
            {
                return null;
            }
           


        }
    }
}
