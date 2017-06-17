var mongodb = require('mongodb'), 
    config = require('./../config.json'),
    db;

mongodb.MongoClient.connect(config.uri, function (err, db) {
    if (err) throw err;

    var heroes = db.collection('heroes');
    heroes.insert(config.seedData,function(err,result){
        if(err) throw err;
        console.log(result);
    });

    db.close(function(err){
        if(err) throw err;
    });
});