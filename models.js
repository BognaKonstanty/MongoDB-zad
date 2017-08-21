var mongoose = require('mongoose');

var shipmentSchema = new mongoose.Schema({
	givenName:{
		type: String
	},
	surname: {
		type: String
	}
});

module.export = mongoose.model('shipmentSchema', shipmentSchema);