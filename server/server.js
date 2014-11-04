var debug = require('debug')('social-scoreboard');
var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
var http = require('http').Server(app);

app.use(express.static(path.join(__dirname, 'client')));

var basePath = path.join(__dirname, '/routes/');

var ip = process.env.IP || '0.0.0.0';
var port = process.env.PORT || '8080';

http.listen(port, ip, function() {
	debug('Application listening on http://' + ip + ':' + port);
});

module.exports = app;
