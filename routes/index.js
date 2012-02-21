exports.index = function(req, res) {
	res.render('index.jade', {
		layout: false
	});
};