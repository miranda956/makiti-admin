// @ts-nocheck
var model = module.exports;
var r = require('rethinkdb');
var config = require('../config/config');

var CATEGORIES_TABLE = 'Categories';

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
            r.table(CATEGORIES_TABLE).limit(1).run(conn, function(error, cursor) {
                var promise;
                if (error) {
                    console.log("Creating table...");
                    promise = r.tableCreate(CATEGORIES_TABLE).run(conn);
                } else {    
                    promise = cursor.toArray();
                }

                // The table exists, setup the update listener
                promise.then(function(result) {
                    console.log("Setting up update listener...");
                    r.table(CATEGORIES_TABLE).changes().run(conn).then(function(cursor) {
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

model.getCategories = function (callback) {
    r.connect(config.database).then(function(conn) {
        r.table(CATEGORIES_TABLE).run(conn).then(function(cursor) {
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

model.saveCategory = function (category, callback) {
    r.connect(config.database).then(function(conn) {
        r.table(CATEGORIES_TABLE).insert(category).run(conn).then(function(results) {
            callback(true, results);
        }).error(function(error) {
            callback(false, error);
        });
    }).error(function(error) {
        callback(false, error);
    });
}

model.updateCategory = function (category, field, callback) {
    r.connect(config.database).then(function(conn) {
        r.table(CATEGORIES_TABLE).get(category.id).update(function(category) {
            return r.object(field, category(field).add(1)); 
        }).run(conn).then(function(results) {
           callback(true, results);
        }).error(function(error) {
            callback(false, error);
        });
    }).error(function(error) {
        callback(false, error);
    });
}