// @ts-nocheck
'use strict';

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connects' );
var databaseName = process.env.RDB_DATABASE;

function generateUniqueString() {
    var ts = String(new Date().getTime()),
        i = 0,
        out = '';

    for (i = 0; i < ts.length; i += 2) {
        out += Number(ts.substr(i, 2)).toString(36);
    }

    return ('prefix' + out);
}

router.post('/api/v1/shop', (request,response ) => {
    let shop ={
        name: request.body.name,
        description: request.body.description,
        ccode:request.body.ccode,
        phone:request.body.phone,
        email:request.body.email,
        address:request.body.address,
        location:request.body.location,
        "shop-number":generateUniqueString(),
        status:req.body.status,
       
        
    };
  
    r.db(databaseName ).table("shops")
        .insert(shop)
        .run(request._rdb)
        .then(cursor => cursor.toArray())
        .then( result => {
            // logic if you want to set
        })
        .catch(error => console.log(error));

    // response
    let data = {
        'success': true,
        'message': "Shop successfully added",
    };
    response.json(data);
});

/* get all shops */
router.get('/api/v1/shop', (request,response ) => {

    r.db(databaseName).table('shops')
        .orderBy(r.desc("id"))
        .run(request._rdb)
        .then(cursor => cursor.toArray())
        .then(result => {
            // logic if you want to set
            response.json(result);
        })
        .catch( error => console.log(error));
});

router.get('/api/v1/shop/:id',(request,response)=>{
    let shop_id = request.params.shop_id;
    r.db(databaseName).table( 'shops' )
    .get( shop_id )
    .run(request._rdb)
    then(cursor => cursor.toArray())
        .then(result => {
            response.json(result);
        }).catch(erro=> console.log(error))

})
router.put( '/shop/:shop_id', ( request, response ) => {
    let shop_id = request.params.shop_id;

    r.db(databaseName).table( 'shops' )
        .get( shop_id )
        .update( {
        name: request.body.name,
        description: request.body.description,
        ccode:request.body.ccode,
        phone:request.body.phone,
        email:request.body.email,
        address:request.body.address,
        location:request.body.location,
        status:req.body.status,

        } )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.delete( '/api/shop/:shop_id', ( request, response ) => {
    let shop_id = request.params.shop_id;

    r.db( databaseName).table( 'shops' )
        .get( shop_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

module.exports = router;