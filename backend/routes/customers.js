// @ts-nocheck
"use strict";


const RethinkDB = require("rethinkdb")
const r = RethinkDB()                 
const conn = r.connect()  
let db = require("../config/config")

module.exports=(app)=>{

    app.get("/api/v1/customers",(req,res)=>{
        r.db(db.database.db).r.table("marketUsers").pluck("name","email","plan","location","status","country","createdDate").
        run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(202).json(result)
            }
        })

    })

    app.get("/api/v1/customer/:id",(req,res,next)=>{
  
        r.db(db.database.db).r.table("marketUsers").pluck("name","email","plan","location","status","country","createdDate").filter({
            id:req.params.id
        }).run(conn,function(err,result){
        if(err){
            throw err
        } else{
            res.status(201).json(result)
        }
        })
    })

    

}