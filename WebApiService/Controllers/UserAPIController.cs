using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using System.Data.Entity;

namespace WebApiService.Controllers
{
    public class UserAPIController : BaseAPIController
    {

        //public IEnumerable<TblUser> Get()
        //{
        //    using (EmployeeDbEntities entities = new EmployeeDbEntities())
        //    {
        //        return entities.TblUsers.ToList();
        //    }
        //}

        public TblUser Get(int id)
        {
            using (EmployeeDbEntities entities = new EmployeeDbEntities())
            {
                return entities.TblUsers.FirstOrDefault(x => x.Id == id);
            }
        }
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblUsers.AsEnumerable());
        }

        public HttpResponseMessage Post([FromBody]TblUser value)
        {
            if(value.Id==0)
            {
                UserDB.TblUsers.Add(value);
                return ToJson(UserDB.SaveChanges());
            }else
            {
                UserDB.Entry(value).State = EntityState.Modified;
                return ToJson(UserDB.SaveChanges());
            }
          
        }
        [HttpPut]
        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        [HttpDelete]
        [Route("api/UserApi/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
