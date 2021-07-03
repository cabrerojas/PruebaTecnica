using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebService.API.Controllers
{
    public class CuidadController : ControllerBase
    {
        // GET: api/<ValuesController>s
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ValuesController>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        public void Delete(int id)
        {
        }
    }
}
