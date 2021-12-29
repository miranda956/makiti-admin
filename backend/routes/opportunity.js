// @ts-nocheck
"use strict";


const RethinkDB = require("rethinkdb")
 const r = RethinkDB()                 
 const conn = r.connect()  
let db = require("../config/config")

module.exports=(app)=>{

    app.post("/api/v1/opportunity",(req,res,next)=>{

        let  opportunity ={
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            city:req.body.city,
            street:req.body.street,
            zipcode:req.body.zipcode,
            website:req.body.website,
            interestedIn:req.body.interestedIn,
            source:req.body.source,
            assignedTo:req.body.assignedTo,
            status:req.body.status

        }
       r.db(db.database.db).r.table("opportunity").insert(opportunity).run(conn, function(err, result){
           if(err){
               throw err
           }
           else{
               res.status(204).send({
                   msg:"post created successfully"
               })
           }
       }

       )


    })
    app.get('/api/v1/opportunity',(req,res)=>{
        r.db(db.database.db).r.table("opportunity").pluck("phone","email","assignedTo","status","source")
        .run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(202).json(result)
            }
        })
    })


    app.get("/api/v1/opportunity/:id",(req,res,next)=>{
  
        r.db(db.database.db).r.table("opportunity").pluck("phone","email","assignedTo","status","source").filter({
            id:req.params.id
        }).run(conn,function(err,result){
        if(err){
            throw err
        } else{
            res.status(201).json(result)
        }
        })
    })

    app.patch("/api/v1/opportunity/:id",(req,res)=>{
        r.db(db.database.db).r.table("opportunity").filter(
            r.row("name","phone","email","city","street","zipcode","website","interstedIn","source","assignedTo","status")
        .update({

            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            city:req.body.city,
            street:req.body.street,
            zipcode:req.body.zipcode,
            website:req.body.website,
            interestedIn:req.body.interestedIn,
            source:req.body.source,
            assignedTo:req.body.assignedTo,
            status:req.body.status


            }) ).run(conn,function(err,result){
                if(err){
                    throw err
                } else{
                    res.status(204).send({
                msg:"Post updated successfully"
                    })
                }
            })
        })



        app.delete("/api/v1/opportunity/:id",(req,res)=>{
            r.db(db.database.db).r.table("opportunity")
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
