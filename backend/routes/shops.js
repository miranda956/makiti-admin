// @ts-nocheck
'use strict';
let model = require('../models/shops')

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
        model.getShops((result)=>{
            res.json(result)
        })
    })

    app.post('/api/v1/shops',(req,res)=>{
        let shop= {
            name: request.body.name,
            description: request.body.description,
            ccode:request.body.ccode,
            phone:request.body.phone,
            email:request.body.email,
            address:request.body.address,
            location:request.body.location,
            "shop-number":generateUniqueString(),
            status:req.body.status,
            
        }

        model.saveShop(shop,(sucess,result)=>{
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

    app.put("/api/v1/shop/:id",(req,res,)=>{
        let shop= {
            name: request.body.name,
            description: request.body.description,
            ccode:request.body.ccode,
            phone:request.body.phone,
            email:request.body.email,
            address:request.body.address,
            location:request.body.location,
            "shop-number":generateUniqueString(),
            status:req.body.status,
            
        }
        model.updateShop(shop, (success, result) => {
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

    app.get("/api/v1/shop:id",(req,res)=>{
        let shop ={
            id:req.params.id
        }
        model.getShops(shop,(result)=>{
            res.json(result)
        })

    })


}

