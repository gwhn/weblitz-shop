var express = require('express'),
    routes = require('./routes'),
    app = express.createServer(),
    Db = require('./db').Db,
    port = process.env.PORT || 3000;

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options', {
        pretty: true
    });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.get('/', routes.index);

var db = new Db('staff.mongohq.com', 10062, 'gwhn', 'myob');

app.get('/products', function(req, res) {
    db.ProductProvider.findAll(function(err, products) {
        if (err) res.json(err, 500);
        else res.json(products);
    });
});

app.get('/categories', function(req, res) {
    db.CategoryProvider.findAll(function(err, categories) {
        if (err) res.json(err, 500);
        else res.json(categories);
    });
});

app.listen(port, function() {
    console.log('express listening on port ' + port);
});