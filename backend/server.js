// @ts-nocheck
'use strict';

const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const helmet = require( 'helmet' );
require( 'dotenv' ).config();
const expressValidator = require('express-validator')
const app = express();
app.use(expressValidator())
app.use( logger( 'dev' ) );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );
app.use( bodyParser.json() );
app.use( cors() );
app.use( helmet() );


const connect = require( './lib/connects' );
const users = require( './routes/users' );
const tickets = require( './routes/tickets' );
const uploads = require( './routes/uploads' );
const permissions = require( './routes/permissions' );
const Roles = require( './routes/Roles' );
const leads = require( './routes/leads' );
const opportunity = require( './routes/opportunity' );
const customers = require( './routes/customers' );
const invoice = require( './routes/invoices' );
const contacts = require( './routes/contacts' );
const analytics = require( './routes/analytics' );
const catalog = require( './routes/catalog' );
const shops = require( './routes/shops' );
const messaging = require( './routes/messaging' );




app.use( connect.connect );
app.use( '/', users );
app.use( connect.close );

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

var server = app.listen( 5000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log( 'App is listening on http://%s:%s', host, port );
} );