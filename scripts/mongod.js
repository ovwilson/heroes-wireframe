var shell = require('shelljs');

shell.echo('Starting Mongo Daemon ...');
shell.echo('"C:/Program Files/MongoDB/Server/3.4/bin/mongod.exe" --smallfiles');
shell.exec('"C:/Program Files/MongoDB/Server/3.4/bin/mongod.exe" --smallfiles');