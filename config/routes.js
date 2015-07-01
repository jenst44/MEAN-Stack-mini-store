var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
var products = require('./../server/controllers/products.js');

module.exports = function(app) {
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	});
	app.post('/customers', function(req, res) {
		customers.add(req, res);
	});
	app.delete('/customers/:id', function(req, res) {
		customers.remove(req, res);
	});
	app.get('/orders', function(req, res) {
		orders.show(req, res);
	});
	app.post('/orders', function(req, res) {
		orders.add(req, res);
	});
	app.delete('/orders/:id', function(req, res) {
		orders.remove(req, res);
	});
	app.get('/products', function(req, res) {
		products.show(req, res);
	});
	app.post('/products', function(req, res) {
		products.add(req, res);
	});
	app.delete('/products/:id', function(req, res) {
		products.remove(req, res);
	});
}; 