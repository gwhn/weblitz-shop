var express = require('express'),
    routes = require('./routes'),
    app = express.createServer(),
    mongo = require('mongodb'),
    server = new mongo.Server('staff.mongohq.com', 10062, {
        auto_reconnect: true
    }),
    db = new mongo.Db('Shop', server),
    user = 'Gwhn',
    pwd = 'helen19031970',
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

app.get('/products', function(req, res) {
    db.open(function(err, db) {
        if (err) throw err;
        db.authenticate(user, pwd, function(err, result) {
            if (err) throw err;
            if (result) {
                db.collection('Products', function(err, collection) {
                    if (err) throw err;
                    collection.find(function(err, cursor) {
                        if (err) throw err;
                        cursor.toArray(function(err, items) {
                            if (err) throw err;
                            res.json(items);
                        });
                    });
                });
            }
        });
    });
});

app.get('/categories', function(req, res) {
    db.open(function(err, db) {
        if (err) throw err;
        db.authenticate(user, pwd, function(err, result) {
            if (err) throw err;
            if (result) {
                db.collection('Categories', function(err, collection) {
                    if (err) throw err;
                    collection.find(function(err, cursor) {
                        if (err) throw err;
                        cursor.toArray(function(err, items) {
                            if (err) throw err;
                            res.json(items);
                        });
                    });
                });
            }
        });
    });
});

app.listen(port, function() {
    console.log('express listening on port ' + port);
});