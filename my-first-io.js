var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var spaces = contents.toString().split('\n');
console.log(spaces.length-1);