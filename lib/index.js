var fs = require('fs'),
		async = require('async');

var modules = {};

var files;

async.series([

	function(cb) {

		files = fs.readdirSync(__dirname + "/../modules");
		cb();

	}

], function() {

	async.forEach(files, function(file, cb) {

		var module = require('../modules/' + file);

		modules[module.info.name] = module;

		if(module.info.async) {
			module.info.arguments.push('function');
		}

		var tmp = function() {

			var args = [];

			for(var arg in arguments) {
				args[arg] = arguments[arg];
			}

			if(args.length != module.info.arguments.length) {

				if(args.length != module.info.arguments.length -1 && !module.info.async) {

					if(module.info.arguments[module.info.arguments.length-1] != "function") {

						throw Error("Number of args for " + module.info.name + " is wrong, expected " + module.info.arguments.length + " got " + args.length);

					}

				}

			}

			for(var i = 0; i < args.length; i++) {

				if(typeof args[i] != module.info.arguments[i]) {

					throw Error("Argument " + i + " for " + module.info.name + " should be " + module.info.arguments[i] + ", got " + (typeof args[i]));

				}

			}

			/*
				TODO: check if async, strip last arg (cb func) insert own to check returned value == info.returns
			*/

			if(module.info.async) {
				module.run(args);
			} else {
				return module.run(args);
			}

		}

		if(!global[module.info.name]) {
			global[module.info.name] = tmp;
		}

		cb();

	}, function() {

		console.log("loaded " + Object.keys(modules).length + " modules");

	});

});
