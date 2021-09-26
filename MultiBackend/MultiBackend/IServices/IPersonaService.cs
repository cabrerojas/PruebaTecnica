using MultiBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultiBackend.IServices
{
    public interface IPersonaService
    {
        IEnumerable<Persona> GetPersonas();
        Boolean AgregarPersona(PersonaVm persona);
        Boolean EditarPersona(PersonaVm persona);
        Boolean EliminarPersona(Guid id);
    }
}
