var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	name: {type:String, required: true},
	item: {type:String, required: true},
	amount: {type:Number, required: true},
	created_at: Date,
	customer_id : {
		type: Schema.Types.ObjectId,
		ref: 'Customers',
		required : true
	},
	product_id : {
		type: Schema.Types.ObjectId,
		ref: 'Products',
		required : true
	}
});

mongoose.model('Order', OrderSchema);