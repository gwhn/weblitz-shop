var express = require('express'),
    app = express.createServer(),
    mongo = require('mongodb'),
    server = new mongo.Server('staff.mongohq.com', 10062, {auto_reconnect: true}),
    db = new mongo.Db('Shop', server),
    user = 'Gwhn',
    pwd = 'helen19031970';

app.use(express.bodyParser());

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/products', function (req, res) {
    db.open(function (err, db) {
        if (err) throw err;
        db.authenticate(user, pwd, function (err, result) {
            if (err) throw err;
            if (result) {
                db.collection('Products', function (err, collection) {
                    if (err) throw err;
                    collection.find(function (err, cursor) {
                        if (err) throw err;
                        cursor.toArray(function (err, items) {
                            if (err) throw err;
                            res.json(JSON.stringify(items));
                        });
                    });
                });
            }
        });
    });
});

app.get('/categories', function (req, res) {
    db.open(function (err, db) {
        if (err) throw err;
        db.authenticate(user, pwd, function (err, result) {
            if (err) throw err;
            if (result) {
                db.collection('Categories', function (err, collection) {
                    if (err) throw err;
                    collection.find(function (err, cursor) {
                        if (err) throw err;
                        cursor.toArray(function (err, items) {
                            if (err) throw err;
                            res.json(JSON.stringify(items));
                        });
                    });
                });
            }
        });
    });
});

app.listen(process.env.PORT);