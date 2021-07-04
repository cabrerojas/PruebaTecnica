using Newtonsoft.Json;
using System;
using System.Collections.Generic;

#nullable disable

namespace PruebaTecnicaMSF.Models
{
    public partial class Sexo
    {
        public Sexo()
        {
            Personas = new HashSet<Persona>();
        }

        public short Codigo { get; set; }
        public string Nombre { get; set; }
        public string Letra { get; set; }
        [JsonIgnore]
        public virtual ICollection<Persona> Personas { get; set; }
    }
}
