using PruebaTecnicaJAGFront.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace PruebaTecnicaJAGFront.Services
{
    public class PersonasServices : IPersonasServices
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public PersonasServices(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<List<Personas>> GetListarPersonasAsync()
        {
            List<Personas> respuesta;

            HttpClient client = _httpClientFactory.CreateClient("ApiPrueba");

            try
            {

                string apiEndPoint = "/Personas";

                Uri uriString = new Uri(uriString: client.BaseAddress + apiEndPoint);
                //HttpContent content = new StringContent(jsonStringDatos, Encoding.UTF8, "application/json");

                HttpResponseMessage httpResponse = client.GetAsync(uriString).Result;
                var response = await httpResponse.Content.ReadAsStringAsync();

                //Corrige la conversion de los datos
                var options = new JsonSerializerOptions()
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                    PropertyNameCaseInsensitive = true,
                    WriteIndented = true,
                    //Converters = { new DateTimeOffsetConverterUsingDateTimeParse() },
                };

                respuesta = JsonSerializer.Deserialize<List<Personas>>(response, options);

            }
            catch (Exception ex)
            {
                throw new Exception("Error al recuperar datos de la función de evaluados." + ex.Message);
            }
            finally
            {
                client.Dispose();
            }

            return respuesta;
        }
    }
}
