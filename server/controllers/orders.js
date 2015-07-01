var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		show: function(req, res) {
			Order.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
		   })
		},
		add: function(req, res) {
			console.log(req.body);
			//finds product so we can later subtract the amount ordered from the quantity
			Product.findOne({_id:req.body.product_id}, function(err, results) {
				if(err) {
					console.log('error in amount update');
				}
				else {
					if(results.quantity<req.body.amount){
						// Resets order amount if it exceeds quantity
						req.body.amount = results.quantity;
						console.log('amount exceeded');
					}
					var order = new Order(req.body);
					order.save(function(err) {
						if(err) {
							console.log('someping not right in orders.js');
						}
						else {
							//subtracting order amount minus
							results.quantity -= req.body.amount;
							console.log('successfully added a order');

							if(results.quantity === 0) {
								Product.remove({_id:req.body.product_id}, function(err, results) {
									res.json(results);
								})
							}
							else {
								//Updates product amount
								Product.update({_id:req.body.product_id}, {quantity:results.quantity}, function(err) {
									if(err) {
										console.log('error with product update');
									}
									else {
										console.log('update')
										res.json({succes:true});
									}
								})
							}
						}
					})

				}
			})
		},
		remove: function(req, res) {
			console.log(req.params);
			Order.remove({_id:req.params.id}, function(err, results) {
				res.json(results);
			})
		}
	}
})();