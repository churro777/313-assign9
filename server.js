var express = require('express');
var app = express();

var postalCalc = require('./postage.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getRate', function(req, res) {
    res.render('pages/getRate');
});
app.get('/', function(req, res) {
    res.render('pages/getRate');
});

app.get('/results', function(req, res) {
    console.log(req.query);
    var params = postalCalc.calculateRate(req.query.mailType, req.query.weight);
    res.render('pages/results', params);
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
