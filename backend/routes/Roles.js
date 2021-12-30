// @ts-nocheck
"use strict";

const RethinkDB = require("rethinkdb")
const r = RethinkDB()                 
const conn = r.connect()  
let db = require("../config/config")

module.exports=(app)=>{

    app.post("/api/v1/Role",(req,res)=>{
        let newRole ={
            RoleName:req.body.RoleName
        }
    
        r.db(db.database.db).r.table("Role").insert(newRole).
        run(conn,function(err,result){
          if(err){
            throw err
          }
          else{
            res.status(204).send({
              msg:" Role created successfully"
            })
          }
        })
        
    
    
      })

    app.get("/api/v1/roles", (req, res) => {
        r.db(db.database.db).r.table("Roles").pluck("RoleName","RoleId","Permissions").
        run(conn,function(err,result){
          if(err){
            throw err
          } else{
            res.status(201).json(result)
          }
        })
        
      });


  app.patch("/api/v1/role/:id",(req,res)=>{
    r.db(db.database.db).r.table("Role").filter(
        r.row("RoleName",)
    .update({
        RoleName:req.body.Role,
        permissionId:req.body.permissionId

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

    



}