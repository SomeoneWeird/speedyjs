var fs = require('fs');

exports.info = {

	name: "save",

	async: true,

	arguments: [

		'string',
		'string'

	],

	returns: 'boolean'

}

exports.run = function(args) {


	fs.writeFile(args[0], args[1], function(err) {

		if(args[2]) {
			args[2](!!err);
		}

	});

}