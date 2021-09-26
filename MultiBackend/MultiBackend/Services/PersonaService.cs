using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MultiBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiBackend.IServices
{
    public class PersonaService : IPersonaService
    {
        BD_MULTIContext _context;
        private readonly ILogger<PersonaService> _logger;

        public PersonaService(BD_MULTIContext context,ILogger<PersonaService> logger) {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Persona> GetPersonas()
        {
            var personas = _context.Personas.ToList();
            return personas;
        }

        public Boolean AgregarPersona(PersonaVm persona) {
            try
            {
                var sexo = _context.Sexos.FirstOrDefault(x => x.Codigo == persona.SexoCodigo);
                var comuna = _context.Comunas.FirstOrDefault(x => x.Codigo == persona.ComunaCodigo && x.CiudadCodigo == persona.CiudadCodigo && x.RegionCodigo == persona.RegionCodigo );
                string[] collection = persona.Run.Split("-"); 

                var personaNueva = new Persona();
                
                personaNueva.Run = persona.Run;
                personaNueva.RunCuerpo = int.Parse(collection[0]);
                personaNueva.RunDigito = collection[1];
                personaNueva.Nombres = persona.Nombres;
                personaNueva.ApellidoPaterno = persona.ApellidoPaterno;
                personaNueva.ApellidoMaterno = persona.ApellidoMaterno;
                personaNueva.Email = persona.Email;
                personaNueva.SexoCodigo = persona.SexoCodigo;
                personaNueva.FechaNacimiento = persona.FechaNacimiento;
                personaNueva.ComunaCodigo = persona.ComunaCodigo;
                personaNueva.Direccion = persona.Direccion;
                personaNueva.Telefono = persona.Telefono;
                personaNueva.Observaciones = persona.Observaciones;
                personaNueva.RegionCodigo = persona.RegionCodigo;
                personaNueva.CiudadCodigo = persona.CiudadCodigo;

                personaNueva.Comuna = comuna;
                personaNueva.SexoCodigoNavigation = sexo;

                _context.Personas.Add(personaNueva);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "{Exception}", ex);
                return false;
                throw;
            }
        }

        public Boolean EditarPersona(PersonaVm persona) {
            try
            {
                var personaOriginal = _context.Personas.FirstOrDefault(x => x.Id == persona.Id);

                if (personaOriginal == null) {
                    return false;
                }

                var sexo = _context.Sexos.FirstOrDefault(x => x.Codigo == persona.SexoCodigo);
                var comuna = _context.Comunas.FirstOrDefault(x => x.Codigo == persona.ComunaCodigo && x.CiudadCodigo == persona.CiudadCodigo && x.RegionCodigo == persona.RegionCodigo);
                persona.Run = persona.Run.Replace(".","");
                string[] collection = persona.Run.Split("-");

                personaOriginal.Run = persona.Run;
                personaOriginal.RunCuerpo = int.Parse(collection[0]);
                personaOriginal.RunDigito = collection[1];
                personaOriginal.Nombres = persona.Nombres;
                personaOriginal.ApellidoPaterno = persona.ApellidoPaterno;
                personaOriginal.ApellidoMaterno = persona.ApellidoMaterno;
                personaOriginal.Email = persona.Email;
                personaOriginal.SexoCodigo = persona.SexoCodigo;
                personaOriginal.FechaNacimiento = persona.FechaNacimiento;
                personaOriginal.ComunaCodigo = persona.ComunaCodigo;
                personaOriginal.Direccion = persona.Direccion;
                personaOriginal.Telefono = persona.Telefono;
                personaOriginal.Observaciones = persona.Observaciones;
                personaOriginal.RegionCodigo = persona.RegionCodigo;
                personaOriginal.CiudadCodigo = persona.CiudadCodigo;

                _context.Personas.Update(personaOriginal);
                _context.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "{Exception}", ex);
                return false;
                throw;
            }            
        }

        public Boolean EliminarPersona(Guid id) {
            try
            {
                var persona = _context.Personas.FirstOrDefault(x => x.Id == id);
                _context.Entry(persona).State = EntityState.Deleted;
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "{Exception}", ex);
                return false;
                throw;
            }
        }
    }
}
