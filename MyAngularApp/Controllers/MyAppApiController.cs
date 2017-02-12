using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MyAngularApp.Controllers
{
    public class MyAppApiController : ApiController
    {
        [HttpGet]
        public JsonResult<List<Person>> Get(string id)
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            var data = new List<Person>
            {
                new Person
                {
                    Name = "Dave",
                    Age = 31
                },
                new Person
                {
                    Name = "Fred",
                    Age = 35
                }
            };

            return Json(data, settings);
        }
    }

    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}