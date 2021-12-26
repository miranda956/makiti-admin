// @ts-nocheck
var model = module.exports;
var r = require('rethinkdb');
var config = require('../config/config');

var POSTS_TABLE = 'Posts';

model.setup = function (callback) {
    console.log("Setting up RethinkDB...");
    
    r.connect(config.database).then(function(conn) {
        // Does the database exist?
        r.dbCreate(config.database.db).run(conn).then(function(result) {
            console.log("Database created...");
        }).error(function(error) {
            console.log("Database already created...");
        }).finally(function() {
            // Does the table exist?
            r.table(POSTS_TABLE).limit(1).run(conn, function(error, cursor) {
                var promise;
                if (error) {
                    console.log("Creating table...");
                    promise = r.tableCreate(POSTS_TABLE).run(conn);
                } else {    
                    promise = cursor.toArray();
                }

                // The table exists, setup the update listener
                promise.then(function(result) {
                    console.log("Setting up update listener...");
                    r.table(POSTS_TABLE).changes().run(conn).then(function(cursor) {
                        cursor.each(function(error, row) {
                            callback(row);
                        });
                    });
                }).error(function(error) {
                    throw error;
                });
            });
        });
    }).error(function(error) {
        throw error;
    });
}

model.getPosts = function (callback) {
    r.connect(config.database).then(function(conn) {
        r.table(POSTS_TABLE).run(conn).then(function(cursor) {
            cursor.toArray(function(error, results) {
                if (error) throw error;
                callback(results);
            });
        }).error(function(error) {
            throw error;
        });
    }).error(function(error) {
        throw error;
    });
}

model.saveaPost = function (posts, callback) {
    r.connect(config.database).then(function(conn) {
        r.table(POSTS_TABLE).insert(posts).run(conn).then(function(results) {
            callback(true, results);
        }).error(function(error) {
            callback(false, error);
        });
    }).error(function(error) {
        callback(false, error);
    });
}

model.updatePost = function (post, field, callback) {
    r.connect(config.database).then(function(conn) {
        r.table(POSTS_TABLE).get(post.id).update(function(post) {
            return r.object(field, post(field).add(1)); 
        }).run(conn).then(function(results) {
           callback(true, results);
        }).error(function(error) {
            callback(false, error);
        });
    }).error(function(error) {
        callback(false, error);
    });
}