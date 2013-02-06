exports.info = {

	name: "parse",

	async: false,

	arguments: [

		'string'

	],

	returns: 'object'

}

exports.run = function(args) {

	return JSON.parse(args[0]);

}