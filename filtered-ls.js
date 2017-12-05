var fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
	if(err) {
		console.log('Error', err);
		return;
	}
	let specificFiles = files.filter((elem) => {
		const exp = new RegExp(`.${process.argv[3]}`);
		if (elem.search(exp) > 0) {
			return true;
		}
	});
	specificFiles.map((elem) => console.log(elem));
});