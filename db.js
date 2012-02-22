var mongodb = require('mongodb');

Db = function(host, port, user, pwd) {
	var that = this;
	that.db = new mongodb.Db('Shop', new mongodb.Server(host, port, {
		auto_reconnect: true
	}));
	that.db.open(function(err, db) {
		if (err) console.log(err);
		db.authenticate(user, pwd, function(err, result) {
			if (err) console.log(err);
			if (result) {
				console.log('authenticated %s', user);
				that.CategoryProvider = new CategoryProvider(db);
				that.ProductProvider = new ProductProvider(db);
			}
		});
	});
	return that;
};

CategoryProvider = function(db) {
	this.db = db;
};

CategoryProvider.prototype.findAll = function(callback) {
	this.db.collection('Categories', function(err, collection) {
		if (err) callback(err);
		collection.find().toArray(function(err, items) {
			if (err) callback(err);
			else callback(null, items);
		});
	});
};

ProductProvider = function(db) {
	this.db = db;
};

ProductProvider.prototype.findAll = function(callback) {
	this.db.collection('Products', function(err, collection) {
		if (err) callback(err);
		collection.find().toArray(function(err, items) {
			if (err) callback(err);
			else callback(null, items);
		});
	});
};

exports.Db = Db;