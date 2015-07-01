store_app.controller('CustomersController', function(CustomerFactory) {
	// this becomes that so that we have access to it in the functions
	var that = this;

	CustomerFactory.getCustomers(function(data) {
		that.customers = data;
	});


	that.addcustomer = function() {
		that.error = null;
		customer_name = that.new_customer.name;
		
		for(i=0;i<that.customers.length;i++) {
			if(that.customers[i].name == customer_name) {
				that.error = "That customer name already exists";				
			}
		}

		if(that.error){
			that.new_customer = {};
		} else {
			that.new_customer.created_at = Date.now();
			console.log(that.new_customer);
			CustomerFactory.addCustomer(that.new_customer, function(data) {
				that.customers = data;
				that.new_customer = {};
			});
		}
	}

	that.removecustomer = function(id) {
		CustomerFactory.removeCustomer(id, function(data) {
			that.customers = data;
		});
	}
});

store_app.controller('OrdersController', function(OrderFactory) {
	var that = this;

	OrderFactory.getOrders(function(data1) {
		that.orders = data1;
	});

	that.addorder = function() {
		//that.new_order.item & that.new_order.name come back as objects which is why we change them below
		that.new_order.product_id = that.new_order.item._id;
		that.new_order.item = that.new_order.item.name;
		that.new_order.customer_id = that.new_order.name._id;
		that.new_order.name = that.new_order.name.name;
		that.new_order.created_at = Date.now();

		OrderFactory.addOrder(that.new_order, function(data1) {
			that.orders = data1;
			that.new_order = {};
		});
	}

	that.removeorder = function(id) {
		OrderFactory.removeOrder(id, function(data1) {
			that.orders = data1;
		});
	}
})

store_app.controller('ProductsController', function(ProductFactory) {
	var that = this;

	ProductFactory.getProducts(function(data2) {
		that.products = data2;
	});
	that.addproduct = function() {
		that.new_product.created_at = Date.now();
		ProductFactory.addProduct(that.new_product, function(data2) {
			that.products = data2;
			that.new_product = {};
		});
	}

	that.removeproduct = function(id) {
		ProductFactory.removeProduct(id, function(data2) {
			that.products = data2;
		});
	}
})