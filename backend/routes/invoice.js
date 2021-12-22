

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connects' );
var databaseName = process.env.RDB_DATABASE;

var pdf = require("pdf-creator-node");
var fs = require("fs");
