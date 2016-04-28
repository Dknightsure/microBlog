var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var DEFAULT_PORT = 27017;

module.exports = new Db(settings.db, new Server(settings.host, DEFAULT_PORT, {}));
