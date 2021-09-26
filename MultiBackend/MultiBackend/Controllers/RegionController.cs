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
    public class RegionController : ControllerBase
    {
        private readonly IRegionService _regionService;
        private readonly ILogger<RegionController> _logger;

        public RegionController(IRegionService regionService, ILogger<RegionController> logger) {
            _regionService = regionService;
            _logger = logger;
        }


        [HttpGet("GetRegiones")]
        public ResponseModel GetPersonas()
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Listado de regiones";

            try
            {
                response.data = _regionService.GetRegiones();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "{Exception}", ex);
                response.error = "Ocurrio un error al retornar el listado de regiones";
            }
            return response;
        }

        [HttpGet("GetCiudades")]
        public ResponseModel GetCiudades()
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Listado de ciudades";

            try
            {
                response.data = _regionService.GetCiudades();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "{Exception}", ex);
                response.error = "Ocurrio un error al retornar el listado de ciudades";
            }
            return response;
        }

        [HttpGet("GetComunas")]
        public ResponseModel GetComunas()
        {
            ResponseModel response = new ResponseModel();
            response.messageResponse = "Listado de comunas";

            try
            {
                response.data = _regionService.GetComunas();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "{Exception}", ex);
                response.error = "Ocurrio un error al retornar el listado de comunas";
            }
            return response;
        }
    }
}
