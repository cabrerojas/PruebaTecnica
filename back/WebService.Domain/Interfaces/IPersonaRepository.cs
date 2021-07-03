using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebService.API.Model;

namespace WebService.Domain.Interfaces
{
    public interface IPersonaRepository
    {
        public List<Persona> GetPersonasRepository();
        public Persona GetPersonByIdRepository(Guid id);
        public Persona CreatePersonaRepository(Persona persona);
        public Persona UpdatePersonaRepository(Persona persona);
        public bool DeletePersonaRepository(Guid id);

    }
}
