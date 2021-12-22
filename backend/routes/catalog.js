// @ts-nocheck
'use strict';

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connects' );
var databaseName = process.env.RDB_DATABASE;
var tableName="Category"
var posts ="Products"
router.post( '/api/v1/category', ( request, response ) => {
    let Category = Object.assign( {}, {
        'categoryName': request.body.categoryName,
        'categoryType': request.body.categoryType
    } );

    r.db( databaseName ).table(tableName )
        .insert( Category)
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/api/v1/category', ( request, response ) => {
    r.db( databaseName ).table( tableName)
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.put( '/api/v1/category/:id', ( request, response ) => {
    let category_id = request.params.category_id;

    r.db( databaseName).table( tableName )
        .get(category_id  )
        .update( {
        'categoryName': request.body.categoryName,
        'categoryType': request.body.categoryType
        } )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.delete( '/api/v1/category/:id', ( request, response ) => {
    let category_id = request.params.category_id;

    r.db( databaseName).table( tableName )
        .get( category_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );



router.post('/api/v1/post', (request,response ) => {
    let post ={
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
  
    r.db(databaseName ).table("products")
        .insert(post)
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