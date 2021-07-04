using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaMSF.Models;
using PruebaTecnicaMSF.Models.Request;
using PruebaTecnicaMSF.Models.Responses;
using PruebaTecnicaMSF.Services.Interfaces;

namespace PruebaTecnicaMSF.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonaController : Controller
    {

        private readonly IPersonaService _personaService;
        private readonly Result _result;

        public PersonaController(IPersonaService personaService)
        {
            _personaService = personaService;
            _result = new Result();
        }

        [HttpGet]
        public async Task<ActionResult> GetAllAsync()
        {
            var dataPersonas = await _personaService.GetAllPersonasAsync();
            _result.Success = true;
            _result.Data = dataPersonas;
            return Ok(_result);
        }


        //THIS SHOULD BE IN ANOTHER CONTROLLER AND SERVICE
        [HttpGet("/Regiones")]
        public async Task<ActionResult> GetAllRegionesAsync()
        {
            var dataRegiones = await _personaService.GetAllRegionesAsync();
            _result.Success = true;
            _result.Data = dataRegiones;
            return Ok(_result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetByIdAsync(Guid id)
        {
            var persona = await _personaService.GetByIdAsync(id);
            _result.Success = true;
            _result.Data = persona;
            return Ok(_result);
        }

        [HttpDelete("{id}")]
        public async Task<Result> DeleteByIdAsync(Guid id)
        {
            var persona = await _personaService.DeleteByIdAsync(id);
            if (persona != null)
            {
                _result.Success = true;
                _result.Data = persona;
                return _result;
            }

            _result.Success = false;
            _result.Error.Message = "No se encontro la persona que desea eliminar";
            _result.Error.StatusCode = StatusCodes.Status204NoContent;
            return _result;
        }

        [HttpPost]
        public async Task<ActionResult> CreateAsync(PersonaRequest request)
        {
            var personaInsertada = await _personaService.CreateAsync(request);

            if (personaInsertada == null)
            {
                _result.Error.Message = "Ocurrio un error al tratar de insertar la persona";
                _result.Error.StatusCode = StatusCodes.Status500InternalServerError;
                return Ok(_result.Error);
            }

            return Ok(personaInsertada);
        }  

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdatePersona(Guid id, PersonaRequest request)
        {
            var personaActualizada = await _personaService.UpdateAsync(id, request);
            if (personaActualizada == null)
            {
                _result.Error.Message = "La persona que trata de actualizar no existe";
                _result.Error.StatusCode = StatusCodes.Status204NoContent;
                return Ok(_result.Error);
            }

            return Ok(personaActualizada);
        }
    }
}