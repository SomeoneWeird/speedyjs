exports.info = {

	name: "stringify",

	async: false,

	arguments: [

		'object'

	],

	returns: 'string'

}

exports.run = function(args) {

	return JSON.stringify(args[0]);

}