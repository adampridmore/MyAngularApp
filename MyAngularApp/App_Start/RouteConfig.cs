using System.Web.Mvc;
using System.Web.Routing;

namespace MyAngularApp
{
    public static class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "Application/{*.}",
                defaults: new { controller = "Application", action = "Index" }
            );
        }
    }
}

