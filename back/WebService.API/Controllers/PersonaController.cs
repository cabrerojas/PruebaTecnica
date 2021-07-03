using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebService.API.Model;
using WebService.Core.Interfaces;
using WebService.Domain.Views;

namespace WebService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly IPersonaService _personaService;
        public PersonaController(IPersonaService personaService)
        {
            _personaService = personaService;
        }

        [HttpGet("GetAll")]
        public ActionResult<List<Persona>> Index()
        {
            return Ok(_personaService.GetPersonasService());
        }

        [HttpGet("GetPersonaById/{id}")]
        public ActionResult<Persona> GetPersona(string id)
        {
            return Ok(_personaService.GetPersonaByIdService(Guid.Parse(id)));
        }

        [HttpPost("CreatePersona")]
        public ActionResult<Persona> CreatePersona(PersonaDto persona)
        {
            if (ModelState.IsValid)
            {
                return Ok(_personaService.CreatePersonaService(persona));
            }
            else {
                return BadRequest(ModelState);
            }
           
        }

        [HttpPut("UpdatePersona")]
        public  ActionResult<Persona> UpdatePersona([FromBody]Persona persona)
        {
            return Ok(_personaService.UpdatePersonaService(persona));
        }

        [HttpDelete("DeletePersona/{id}")]
        public ActionResult<Persona> DeletePersona(string id)
        {
            return Ok(_personaService.DeletePersonaService(Guid.Parse(id)));
        }
    }
}
