// @ts-nocheck
'use strict';
let model =require("../models/post")
let categoryModel =require("../models/categories")

module.exports=(app)=>{
    app.get('/api/v1/posts',(req,res)=>{
        model.getPosts((result)=>{
            res.json(result)
        })
    })
    
    app.get('/api/v1/categories',(req,res)=>{
        categoryModel.getCategories((result)=>{
            res.json(result)
        })
    })
    
    app.post("/api/v1/post",(req,res)=>{
        let post  ={
            title: request.body.name,
            description: request.body.description,
            ccode:request.body.ccode,
            phone:request.body.phone,
            email:request.body.email,
            address:request.body.address,
            location:request.body.location,
            status:req.body.status,
            shops:[
    
            ]
           
            
        }

        model.savePost(post,(sucess,result)=>{
            if(sucess){
                res.json({
                    status:"OK"
                })
            }else{
                res.json({
                    status:'Error'
                })
            }
        })
    })

    app.post("/api/v1/catagory",(req,res)=>{
        let category={
            categoryName:req.body.categoryName,
            categoryType:req.body.categoryType
            
        }

        categoryModel.saveCategory(category,(success,result)=>{
            if(success){
                res.json({
                    status:"OK"
                })

            }else{
                res.json({
                    status:'Error'
                })
            }

        })
    })
    

    app.get("/api/v1/post/:id",(req,res)=>{
        let post ={
            id:req.params.id
        }
        model.getPosts(post,(result)=>{
            res.json(result)
        })

    })

    app.get("/api/v1/cat/:id",(req,res)=>{
        let cat ={
            id:req.params.id
        }
        categoryModel.getCategories(cat,(result)=>{
            res.json(result)
        })
    })

    app.put("/api/v1/post/:id",(req,res,)=>{
        let post= {
            title: request.body.name,
            description: request.body.description,
            ccode:request.body.ccode,
            phone:request.body.phone,
            email:request.body.email,
            address:request.body.address,
            location:request.body.location,
            status:req.body.status,
            shops:[
    
            ]
           
            
        }
        model.updateShop(post, (success, result) => {
            if (success) {
                res.json({
                    status: 'OK'
                })
            } else {
                res.json({
                    status: 'Error'
                })
            }
        })
    })
    app.put("/api/v1/cat/:id",(req,res,)=>{
        let cat= {
            categoryName:req.body.categoryName,
            categoryType:req.body.categoryType
         
        }
        model.updateShop(cat, (success, result) => {
            if (success) {
                res.json({
                    status: 'OK'
                })
            } else {
                res.json({
                    status: 'Error'
                })
            }
        })
    })
    



}
