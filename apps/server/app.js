var express = require('express');

var app = express();

app.get('/', function (req, res) {
	var uid = req.params.uid;
	var path = req.params[0] ? req.params[0] : 'index.html';
	res.sendFile(path, {root: './dist'});
});

app.listen(5000, function () {
	console.log('listening on 5000');
});