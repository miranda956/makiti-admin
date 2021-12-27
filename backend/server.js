// @ts-nocheck
'use strict';

const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const helmet = require( 'helmet' );
require( 'dotenv' ).config();
const app = express();

app.use( logger( 'dev' ) );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );
app.use( bodyParser.json() );
app.use( cors() );
app.use( helmet() );


//require( './routes/users' )(app);
//require( './routes/tickets' )(app);
//require( './routes/uploads' )(app);
//require( './routes/permissions' )(app);
//require( './routes/Roles' )(app);
//require( './routes/leads' )(app);
//require( './routes/opportunity' )(app);
//require( './routes/customers' )(app);
//require( './routes/invoices' )(app);
//require( './routes/contacts' )(app);
//require( './routes/analytics' )(app);
require( './routes/catalog' )(app);
require( './routes/shops' )(app);
//require( './routes/messaging' )(app);





app.use( ( error, request, response, next ) => {
    response.status( error.status || 500 );
    response.json( {
        error: error.message
    } );
} );

app.use( ( request, response, next ) => {
    let error = new Error( 'Not Found' );
    error.status = 404;
    response.json( error );
} );

const PORT = process.env.port || 5000
 app.listen( PORT, function() {


    console.log( `server listening on ${PORT}` );
} );