using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebService.API.Model;
using WebService.Domain.Views;

namespace WebService.Core.Interfaces
{
    public interface IPersonaService
    {
        public List<Persona> GetPersonasService();
        public Persona GetPersonaByIdService(Guid id);
        public Persona CreatePersonaService(PersonaDto persona);
        public Persona UpdatePersonaService(Persona persona);
        public bool DeletePersonaService(Guid id);
    }
}
