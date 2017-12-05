var fs = require('fs');

fs.readFile(process.argv[2], null, (err, data) => {
	var str = data.toString();
	var newLines = str.split('\n').length-1;
	console.log(newLines);
});