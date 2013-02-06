var exec = require('child_process').exec;

exports.info = {

	name: "ping",

	async: true,

	arguments: [

		'string'

	],

	returns: 'boolean'

}

exports.run = function(args) {

	exec('ping -c 1 ' + args[0], function(err, stdout, stderr) {

		args[args.length-1](!!stdout.match(/0% packet loss/));

	});

}