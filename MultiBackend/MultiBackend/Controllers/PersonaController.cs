using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MultiBackend.IServices;
using MultiBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly IPersonaService _personaService;
        private readonly ILogger<PersonaController> _logger; 
        public PersonaController(IPersonaService  persona, ILogger<PersonaController> logger) {
            _personaService = persona;
            _logger = logger;
        }

        [HttpGet("GetPersonas")]
        public ResponseModel GetPersonas()
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Listado de personas";

            try {
                response.data = _personaService.GetPersonas();
            }
            catch (Exception ex) {
                _logger.LogError(ex, "{Exception}", ex);
                response.error = "Ocurrio un error al retornar el listado de personas";
            }
            return response;
        }

        [HttpPost("AgregarPersona")]
        public ResponseModel AgregarPersona(PersonaVm persona)
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Agregar persona";

            bool personaAgregada = _personaService.AgregarPersona(persona);

            if (personaAgregada) {
                response.data = true;
            }
            else {
                response.data = false;
                response.error = "Ocurrio un error al intentar agregar esta persona";
            }
               
            return response;
        }

        [HttpPut("EditarPersona")]
        public ResponseModel EditarPersona(PersonaVm persona)
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Editar persona";

            bool personaEditada = _personaService.EditarPersona(persona);

            if (personaEditada)
            {
                response.data = true;
            }
            else
            {
                response.data = false;
                response.error = "Ocurrio un error al intentar editar esta persona";
            }

            return response;
        }

        [HttpDelete("EliminarPersona")]
        public ResponseModel EliminarPersona(Guid id)
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Eliminar persona";

            bool personaEliminada = _personaService.EliminarPersona(id);

            if (personaEliminada)
            {
                response.data = true;
            }
            else
            {
                response.data = false;
                response.error = "Ocurrio un error al intentar eliminar esta persona";
            }

            return response;
        }


    }
}
