// @ts-nocheck
'use strict';

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connects' );
var databaseName = process.env.RDB_DATABASE;
router.get('/api/v1/tickets', (request,response ) => {

    r.db(databaseName).table('Tickets')
        .orderBy(r.desc("id"))
        .run(request._rdb)
        .then(cursor => cursor.toArray())
        .then(result => {
            // logic if you want to set
            response.json(result);
        })
        .catch( error => console.log(error));
});

router.get('/api/v1/tickets/:id',(request,response)=>{
    let Tickets_id = request.params.Tickets_id;
    r.db(databaseName).table( 'Tickets' )
    .get( Tickets_id )
    .run(request._rdb)
    then(cursor => cursor.toArray())
        .then(result => {
            response.json(result);
        }).catch(erro=> console.log(error))

})
router.delete( '/api/tickets/:ticket_id', ( request, response ) => {
    let ticket_id = request.params.ticket_id;

    r.db( databaseName).table( 'Tickets' )
        .get( ticket_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );