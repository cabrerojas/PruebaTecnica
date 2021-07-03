using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebService.API.Model;
using WebService.Domain.Interfaces;

namespace WebService.Infrastructure.DataAccess
{
    public class PersonaRepository: IPersonaRepository
    {
        private db_context _context;
        public PersonaRepository(db_context context)
        {
            _context = context;
        }

        public List<Persona> GetPersonasRepository() 
        {
            try
            {
                return _context.Personas.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Persona GetPersonByIdRepository(Guid id) 
        {
            try
            {
                return  _context.Personas.Where(o => o.Id == id).SingleOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Persona CreatePersonaRepository(Persona persona) 
        {
            try
            {
               var create = _context.Personas.Add(persona);
                            _context.SaveChanges();
                return GetPersonByIdRepository(create.Entity.Id);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Persona UpdatePersonaRepository(Persona persona) 
        {
            try
            {
                var dataPersona = _context.Personas.SingleOrDefault(o => o.Id == persona.Id);
                if (dataPersona != null)
                {
                    dataPersona = new Persona
                    {
                        Nombre = persona.Nombre,
                        Nombres = persona.Nombres,
                        ComunaCodigo = persona.ComunaCodigo,
                        CiudadCodigo = persona.CiudadCodigo,
                        FechaNacimiento = persona.FechaNacimiento,
                        ApellidoMaterno = persona.ApellidoMaterno,
                        ApellidoPaterno = persona.ApellidoPaterno,
                        SexoCodigoNavigation = persona.SexoCodigoNavigation,
                        Comuna = persona.Comuna,
                        Direccion = persona.Direccion,
                        Email = persona.Email,
                        Observaciones = persona.Observaciones,
                        RegionCodigo = persona.RegionCodigo,
                        Run = persona.Run,
                        RunCuerpo = persona.RunCuerpo,
                        RunDigito = persona.RunDigito,
                        Telefono = persona.Telefono,
                        SexoCodigo = persona.SexoCodigo
                    };
                    _context.Attach(dataPersona);
                    _context.Update(dataPersona);
                    _context.SaveChanges();
                }

                return GetPersonByIdRepository(dataPersona.Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeletePersonaRepository(Guid id) 
        {
            try
            {
                var dataPersona = _context.Personas.SingleOrDefault(o => o.Id == id);
                if (dataPersona != null)
                {
                     _context.Attach(dataPersona);
                     _context.Remove(dataPersona);
                     _context.SaveChanges();
                    return true;
                }
                else
                    return false;
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
