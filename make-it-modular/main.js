var files = require('./file1');

files(process.argv[2], process.argv[3], (err = null, data = []) => {
	if(err) {
		console.log(err);
	} else {
		data.map((elem) => {
			console.log(elem);
		});
	}
});