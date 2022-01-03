// @ts-nocheck
'use strict';


let r = require('rethinkdb');
             
const conn = r.connect()  
let db = require("../config/config")

function generateUniqueString() {
    var ts = String(new Date().getTime()),
        i = 0,
        out = '';

    for (i = 0; i < ts.length; i += 2) {
        out += Number(ts.substr(i, 2)).toString(36);
    }

    return ('prefix' + out);
}
  
  

module.exports=(app)=>{
    app.get('/api/v1/shops',(req,res)=>{
        r.db(db.database.db).r.table("shops")
        .run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(202).json(result)
            }
        })
    })


    app.get("/api/v1/shop/:id",(req,res,next)=>{
  
        r.db(db.database.db).r.table("Shop").filter({
            id:req.params.id
        }).run(conn,function(err,result){
        if(err){
            throw err
        } else{
            res.status(201).json(result)
        }
        })
    })

    app.post("/api/v1/shop",(req,res,next)=>{

        let  newShop ={
            name:req.body.name,
            description:req.body.description,
            ccode:req.body.ccode,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            location:req.body.location,
            slug:req.body.slug,
            plan:req.body.plan,
            note:req.body.note,
            notes:req.body.notes,
            status:req.body.status,
            "shop-number":generateUniqueString(),


        }
       r.db(db.database.db).r.table("Shop").insert(newShop).run(conn, function(err, result){
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

    app.patch("/api/v1/shop/:id",(req,res)=>{
        r.db(db.database.db).r.table("Shop").filter(
            r.row("name","description","ccode","phone","email","address","location","slug","plan","note","notes","status")
        .update({
            name:req.body.name,
            description:req.body.description,
            ccode:req.body.ccode,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            location:req.body.location,
            slug:req.body.slug,
            plan:req.body.plan,
            note:req.body.note,
            notes:req.body.notes,
            status:req.body.status,
            "shop-number":generateUniqueString(),
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


   

        app.delete("/api/v1/shop/:id",(req,res)=>{
            r.db(db.database.db).r.table("Shop")
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

