using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiService;

namespace WebApiService.Controllers
{
    public class TblUsersController : ApiController
    {
        private EmployeeDbEntities db = new EmployeeDbEntities();

        // GET: api/TblUsers
        public IQueryable<TblUser> GetTblUsers()
        {
            return db.TblUsers;
        }

        // GET: api/TblUsers/5
        [ResponseType(typeof(TblUser))]
        public IHttpActionResult GetTblUser(int id)
        {
            TblUser tblUser = db.TblUsers.Find(id);
            if (tblUser == null)
            {
                return NotFound();
            }

            return Ok(tblUser);
        }

        // PUT: api/TblUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTblUser(int id, TblUser tblUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblUser.Id)
            {
                return BadRequest();
            }

            db.Entry(tblUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TblUsers
        [ResponseType(typeof(TblUser))]
        public IHttpActionResult PostTblUser(TblUser tblUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TblUsers.Add(tblUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblUser.Id }, tblUser);
        }

        // DELETE: api/TblUsers/5
        [ResponseType(typeof(TblUser))]
        public IHttpActionResult DeleteTblUser(int id)
        {
            TblUser tblUser = db.TblUsers.Find(id);
            if (tblUser == null)
            {
                return NotFound();
            }

            db.TblUsers.Remove(tblUser);
            db.SaveChanges();

            return Ok(tblUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TblUserExists(int id)
        {
            return db.TblUsers.Count(e => e.Id == id) > 0;
        }
    }
}