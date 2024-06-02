using Microsoft.AspNetCore.Mvc;
using FleetServicesAPI.Data;
using System;
using System.Linq;

namespace FleetServicesAPI.Controllers
{
    public class HomeController : Controller
    {
        private readonly FleetContext _context;

        public HomeController(FleetContext context)
        {
            _context = context;
        }

        [HttpGet("/")]
        public IActionResult Index()
        {
            try
            {
                var users = _context.Users.ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}