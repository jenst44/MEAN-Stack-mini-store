var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: {type:String, required:true},
	url: {type:String, required:true},
	description: {type:String, required:true},
	quantity: {type:Number, required:true},
	created_at: Date
});

mongoose.model('Product', ProductSchema);