var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
		   })
		},
		add: function(req, res) {
			console.log(req.body);
			var customer = new Customer(req.body);
			customer.save(function(err) {
				if(err) {
					console.log('someping not right in customers.js');
				}
				else {
					console.log('successfully added a customer');
					res.json({succes:true});
				}

			})
		},
		remove: function(req, res) {
			console.log(req.params);
			Customer.remove({_id:req.params.id}, function(err, results) {
				if(err){
					res.json(err);
				}
				else {
					Order.remove({customer_id:req.params.id}, function(err, results) {
						res.json(results);
					})
				}
			})
		}
	}
})();