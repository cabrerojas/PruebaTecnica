using System;
using System.Text.Json.Serialization;

namespace PruebaTecnicaJAGFront.Data
{
    public class Personas
    {
        [JsonPropertyName("nombre")]
        public string Name { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("direccion")]
        public String Direccion { get; set; }

        [JsonPropertyName("run")]
        public string Rut { get; set; }
    }
}
