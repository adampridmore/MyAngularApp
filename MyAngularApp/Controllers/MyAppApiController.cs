using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MyAngularApp.Controllers
{
    public class MyAppApiController : ApiController
    {
        [HttpGet]
        public JsonResult<Person> Get(string id)
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            return Json(new Person
            {
                Name = "Dave",
                Age = 31
            },settings);
        }
    }

    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}