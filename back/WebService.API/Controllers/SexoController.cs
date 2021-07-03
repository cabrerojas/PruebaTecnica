using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebService.API.Controllers
{
    public class SexoController : ControllerBase
    {
        // GET: SexoController
        public IActionResult Index()
        {
            return Ok();
        }

        // GET: SexoController/Details/5
        public IActionResult Details(int id)
        {
            return Ok();
        }

        // GET: SexoController/Create
        public IActionResult Create()
        {
            return Ok();
        }

        // POST: SexoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }

        // GET: SexoController/Edit/5
        public IActionResult Edit(int id)
        {
            return Ok();
        }

        // POST: SexoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }

        // GET: SexoController/Delete/5
        public IActionResult Delete(int id)
        {
            return Ok();
        }

        // POST: SexoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return Ok();
            }
        }
    }
}
