// @ts-nocheck
"use strict";


const RethinkDB = require("rethinkdb")
const r = RethinkDB()                 
const conn = r.connect()  
let db = require("../config/config")


module.exports=(app)=>{

    app.get('/api/v1/contacts',(req,res)=>{
        r.db(db.database.db).r.table("Users").pluck("phone", "email","ccode")
        .run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(202).json(result)
            }
        })
    })



    

}