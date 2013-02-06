require('./');

var obj = { a: 'a' };

var stringified = stringify(obj);

var parsed = parse(stringified);

console.log(parsed.a == obj.a ? "JSON works" : "JSON is broken...");

ping('127.0.0.1', function(up) {

	console.log(up ? "Ping works." : "Pings broken");

});

var text = 'this is test text';

save('test.txt', text, function() {
	/* optional callback */
});

read('test.txt', function(data) {

	console.log(text == data ? "Read/write work." : "Data didn't match... somethings broken.");

});