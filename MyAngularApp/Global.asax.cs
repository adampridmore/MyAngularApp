using System.Web.Http;
using System.Web.Routing;

namespace MyAngularApp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(Routing.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
