require('dotenv').config();

var mongodb = require('mongodb'),
    config = require('./../config.json');

mongodb.MongoClient.connect(process.env.REMOTE_DB, function (err, db) {
    if (err) throw err;

    var heroes = db.collection('heroes');
    heroes.insert(config.seedData, function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    db.close(function (err) {
        if (err) throw err;
    });
});