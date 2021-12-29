// @ts-nocheck
'use strict';


const RethinkDB = require("rethinkdb")
 const r = RethinkDB()                 
 const conn = r.connect()  
let db = require("../config/config")

module.exports=(app)=>{

    app.get("/api/v1/posts",(req,res,next)=>{
     r.db(db.database.db).r.table("Post")
     .then((posts)=>{
         res.json(posts)
     }).catch((err)=>{
        next(err)
     })


    })
   
    app.get("/api/v1/categories",(req,res,next)=>{
        r.db(db.database.db).r.table("Category")
        .then((cats)=>{
            res.json(cats)
        }).catch((err)=>{
            next(err)
        })
    })

    app.post("/api/v1/post",(req,res,next)=>{

        let  post ={
            title:req.body.title,
            description:req.body.description,
            plan:req.body.plan,
            price:req.body.price,
            negotiable:req.body.negotiable,
            address:req.body.address,
            location:req.body.location,
            unused:req.body.unused


        }
       r.db(db.database.db).r.table("Post").insert(post).run(conn, function(err, result){
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

    app.post("/api/v1/cat",(req,res,next)=>{

        let newCat ={

            categoryName:req.body.categoryName,
            categoryType:req.body.categoryType

        }

        r.db(db.database.db).r.table("Category").insert(newCat).run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(204).send({
                    msg:"Category created "
                })
            }
        })
    })

    app.get("/api/v1/post/:id",(req,res,next)=>{
  
        r.db(db.database.db).r.table("Post").filter({
            id:req.params.id
        }).run(conn,function(err,result){
        if(err){
            throw err
        } else{
            res.status(201).json(result)
        }
        })
    })
    
    app.get("/api/v1/cat/:id",(req,res)=>{
        r.db(db.database.db).r.table("Category").filter({
            id:req.params.id
        }).run(conn,function(err,result){
        if(err){
            throw err
        } else{
            res.status(201).json(result)
        }
        })
    })

    app.patch("/api/v1/post/:id",(req,res)=>{
        r.db(db.database.db).r.table("Post").filter(
            r.row("title","description","plan","price","price","negotiable","location","unused")
        .update({
            title:req.body.title,
            description:req.body.description,
            plan:req.body.plan,
            price:req.body.price,
            negotiable:req.body.negotiable,
            location:req.body.location,
            unused:req.body.unused
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


        app.patch("/api/v1/cat/:id",(req,res)=>{
            r.db(db.database.db).r.table("Category").filter(
                r.row("CategoryName","CategoryType")
            .update({
                  CategoryName:req.body.CategoryName,
                  categoryType:req.body.categoryType
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

            app.delete("/api/v1/post/:id",(req,res)=>{
                r.db(db.database.db).r.table("Post")
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

            app.delete("/api/v1/cat/:id",(req,res)=>{
                r.db(db.database.db).r.table("Category")
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