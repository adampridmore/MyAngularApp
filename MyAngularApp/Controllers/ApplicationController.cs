using System.Web.Mvc;

namespace MyAngularApp.Controllers
{
    public class ApplicationController : Controller
    {
        // GET: App
        public ActionResult Index()
        {
            return View();
        }
    }
}