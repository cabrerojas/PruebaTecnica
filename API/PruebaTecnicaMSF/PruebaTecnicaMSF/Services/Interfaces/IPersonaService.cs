using PruebaTecnicaMSF.Models;
using PruebaTecnicaMSF.Models.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnicaMSF.Services.Interfaces
{
    public interface IPersonaService
    {
        Task<List<Persona>> GetAllPersonasAsync();
        Task<Persona> GetByIdAsync(Guid id);
        Task<Persona> DeleteByIdAsync(Guid id);
        Task<Persona> CreateAsync(PersonaRequest persona);
        Task<Persona> UpdateAsync(Guid id, PersonaRequest persona);
        Task<List<Region>> GetAllRegionesAsync();
    }
}
