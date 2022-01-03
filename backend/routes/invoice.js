// @ts-nocheck
'use strict';
let r = require('rethinkdb');
    
const conn = r.connect()  
let db = require("../config/config")




var pdf = require("pdf-creator-node");
var fs = require("fs");

module.exports=(app)=>{
    app.get("/api/v1/invoice",(req,res,next)=>{
        r.db(db.database.db).r.table("Invoices").pluck("invoiceid","name","description","createdAt","customer","status")
        
        .run(conn,function(err,result){
            if(err){
                throw err
            } else{
                res.status(202).json(result)
            }
        })
        
   
       })
      
       app.post("/api/V1/invoice",(req,res)=>{
           let newInvoice ={
               invoiceId:Date.now(),
               customerName:req.body.customerName,
               totalAmount:req.body.totalAmount,
               paymentDueby:req.body.paymentDueby,
               services:req.body.services,
               status:req.body.status,
               expirationDate:req.body.expirationDate



           }
           r.db(db.database.db).r.table("Invoice").insert(newInvoice).run(conn,function(err,result){
               if(err){
                   throw err
               }
               else{
                   res.status(204).send({
                       msg:"invoice created successfully"
                   })
               }
           })


       })

       app.patch("/api/v1/invoice/:id",(req,res)=>{
        r.db(db.database.db).r.table("Invoice").filter(
            r.row("customerName","totalAmount","paymentDueby","services","expirationDate","status")
        .update({
            customerName:req.body.customerName,
            totalAmount:req.body.totalAmount,
            paymentDueby:req.body.paymentDueby,
            services:req.body.services,
            expirationDate:req.body.expirationDate,
            status:req.body.status

            }) ).run(conn,function(err,result){
                if(err){
                    throw err
                } else{
                    res.status(204).send({
                msg:"Invoice  updated successfully"
                    })
                }
            })
        })

        app.delete("/api/v1/invoice/:id",(req,res)=>{
            r.db(db.database.db).r.table("Invoice")
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
