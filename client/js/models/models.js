store_app.factory('CustomerFactory', function($http) {
	var factory = {};
	var customers = [];

	factory.getCustomers = function(callback) {
		$http.get('/customers').success(function(output) {
			customers = output;
			customers.sort().reverse();
			callback(customers);
		})
	}

	factory.addCustomer = function(info, callback) {
		$http.post('/customers', info).success(function(){
			factory.getCustomers(callback);
		});
		callback(customers);
	}

	factory.removeCustomer = function(id, callback) {
		$http.delete('/customers/'+id).success(function(){
			factory.getCustomers(callback);
		});
	}

	return factory;
})

store_app.factory('OrderFactory', function($http) {
	var factory = {};
	var orders = [];

	factory.getOrders = function(callback) {
		$http.get('/orders').success(function(output) {
			orders = output;
			orders.sort().reverse();
			callback(orders);
		})
	}

	factory.addOrder = function(info, callback) {
		$http.post('/orders', info).success(function(){
			factory.getOrders(callback);
		});
		callback(orders);
	}

	factory.removeOrder = function(id, callback) {
		$http.delete('/orders/'+id).success(function(){
			factory.getOrders(callback);
		});
	}

	return factory;
})

store_app.factory('ProductFactory', function($http) {
	var factory = {};
	var products = [];

	factory.getProducts = function(callback) {
		$http.get('/products').success(function(output) {
			products = output;
			products.sort().reverse();
			callback(products);
		})
	}

	factory.addProduct = function(info, callback) {
		$http.post('/products', info).success(function(){
			factory.getProducts(callback);
		});
		callback(products);
	}

	factory.removeProduct = function(id, callback) {
		$http.delete('/products/'+id).success(function(){
			factory.getProducts(callback);
		});
	}

	return factory;
})