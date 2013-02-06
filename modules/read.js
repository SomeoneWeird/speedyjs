var fs = require('fs');

exports.info = {

	name: "read",

	async: true,

	arguments: [

		'string'

	],

	returns: 'string'

}

exports.run = function(args) {

	fs.readFile(args[0], function(err, data) {
		args[1](data.toString());
	});

}