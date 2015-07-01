var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		show: function(req, res) {
			Product.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
		   })
		},
		add: function(req, res) {
			console.log(req.body);
			var product = new Product(req.body);
			product.save(function(err) {
				if(err) {
					console.log('someping not right in products.js');
				}
				else {
					console.log('successfully added a product');
					res.json({succes:true});
				}

			})
		},
		remove: function(req, res) {
			console.log(req.params);
			Product.remove({_id:req.params.id}, function(err, results) {
				res.json(results);
			})
		}
	}
})();