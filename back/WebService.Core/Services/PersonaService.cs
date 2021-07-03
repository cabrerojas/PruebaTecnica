using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebService.API.Model;
using WebService.Core.Interfaces;
using WebService.Domain.Interfaces;
using WebService.Domain.Views;

namespace WebService.Core.Services
{
    public class PersonaService: IPersonaService
    {
        private readonly IPersonaRepository _personaRepository;
        public PersonaService(IPersonaRepository personaRepository)
        {
            _personaRepository = personaRepository;
        }

        public List<Persona> GetPersonasService() 
        {
            try
            {
                return _personaRepository.GetPersonasRepository();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Persona GetPersonaByIdService(Guid id) 
        {
            try
            {
                return _personaRepository.GetPersonByIdRepository(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Persona CreatePersonaService(PersonaDto personaDto) 
        {
            try
            {
                JsonConvert.DefaultSettings = () => new JsonSerializerSettings
                {
                    Formatting = Formatting.Indented,
                    TypeNameHandling = TypeNameHandling.Objects,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };


                return _personaRepository.CreatePersonaRepository(new Persona
                {
                    Id = new Guid(Guid.NewGuid().ToString()),
                    Run = personaDto.run,
                    Nombre = personaDto.nombre,
                    Nombres = personaDto.nombres,
                    ApellidoMaterno = personaDto.apellido_materno,
                    ApellidoPaterno = personaDto.apellido_paterno,
                    Email = personaDto.email,
                    FechaNacimiento = Convert.ToDateTime(personaDto.fecha_nacimiento),
                    SexoCodigo = personaDto.sexo_code,
                    RegionCodigo = personaDto.region_code,
                    CiudadCodigo = personaDto.cuidad_code,
                    ComunaCodigo = personaDto.comuna_code,
                    Direccion = personaDto.direccion,
                    Observaciones = personaDto.observaciones,
                    RunDigito = personaDto.run,
                    Telefono = personaDto.telefono,
                    RunCuerpo = 0,
                    SexoCodigoNavigation = new Sexo
                    {
                        Codigo = personaDto.sexo_code,
                        Letra = personaDto.sexo_name,
                        Nombre = "",
                        Personas = null
                    },
                    Comuna = new Comuna
                    {
                        Codigo = personaDto.comuna_code,
                        Nombre = "",
                        CiudadCodigo = personaDto.cuidad_code,
                        RegionCodigo = personaDto.region_code,
                        CodigoLibroClaseElectronico = 0,
                        CodigoPostal = 0,
                        Personas = null,
                        Ciudad = new Ciudad
                        {
                            Codigo = personaDto.cuidad_code,
                            Nombre = personaDto.cuidad_name,
                            RegionCodigo = personaDto.region_code,
                            Comunas = null,
                            RegionCodigoNavigation = new Region
                            {
                                Codigo = personaDto.region_code,
                                Nombre = personaDto.region_name,
                                NombreOficial = personaDto.region_name,
                                CodigoLibroClaseElectronico = personaDto.region_code,
                                Ciudades = null
                            }
                        }
                    }
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Persona UpdatePersonaService(Persona persona) 
        {
            try
            {
                return _personaRepository.UpdatePersonaRepository(persona);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeletePersonaService(Guid id) 
        {
            try
            {
                return _personaRepository.DeletePersonaRepository(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
