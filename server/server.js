var debug = require('debug')('nomyme');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
console.log("****", path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

var basePath = path.join(__dirname, '/routes/');
fs.readdirSync(basePath).forEach(function(filename) {
	var basePathService = '/' + filename.replace(/\.js$/, '');
	var serviceDefinition = basePath + filename;
  app.use(basePathService, require(serviceDefinition));
});

var ip = process.env.IP || '0.0.0.0';
var port = process.env.PORT || '8080';

http.listen(port, ip, function() {
	debug('Application listening on http://' + ip + ':' + port);
});

module.exports = app;