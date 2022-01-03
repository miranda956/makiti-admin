// @ts-nocheck
"use strict";


const RethinkDB = require("rethinkdb")
const r = RethinkDB()                 
const conn = r.connect()  
let db = require("../config/config")

module.exports=(app)=>{

  app.post("/api/v1/staff",(req,res)=>{
    let newStaff ={
      staffName:req.body.staffName,
      staffNo:req.body.staffNo,
      Role:req.body.Role,
      password:req.body.password,

    }

    r.db(db.database.db).r.table("Staff").insert(newStaff).
    run(conn,function(err,result){
      if(err){
        throw err
      }
      else{
        res.status(204).send({
          msg:"Staff created successfully"
        })
      }
    })
    


  })

  app.get("/api/v1/staff", (req, res) => {
    r.db(db.database.db).r.table("admin").pluck("name","role").
    run(conn,function(err,result){
      if(err){
        throw err
      } else{
        res.status(201).json(result)
      }
    })
    
  });

  app.patch("/api/v1/staff/:id",(req,res)=>{
    r.db(db.database.db).r.table("Staff").filter(
        r.row("Role")
    .update({
        Role:req.body.Role

        }) ).run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(204).send({
            msg:" updated successfully"
                })
            }
        })
    })



    app.delete("/api/v1/staff/:id",(req,res)=>{
      r.db(db.database.db).r.table("Staff")
      .filter({
          id:req.params.id
      })
      .delete().run(conn,function(err,result){
          if(err){
              throw err;

          }else{
              res.status(202).send({
                  msg:"Deleted successfully"
              })
          }
      })
  })


 
}