var mongoose = require('mongoose'),
    config = require('./../config.json'),
    db;

mongoose.Promise = global.Promise;
mongoose.connect(config.uri);
db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

    var Schema = mongoose.Schema;
    var HeroSchema = new Schema({
        name: String,
        description: String,
        topRated: String
    });

    var heroModel = mongoose.model('Hero', HeroSchema);
    var batman = heroModel({ name: 'Batman', description: 'Caped crusader', topRated: true });
    batman.save(function (err) {
        if (err) throw err;
        console.log('Batman Saved!');
        mongoose.connection.db.close(function (err) {
            if (err) throw err;
        });
    });

});
