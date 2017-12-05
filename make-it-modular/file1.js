var fs = require('fs');

module.exports = function (dirname, extension, callback) {
	fs.readdir(dirname, (err, data) => {
		if (err) {
			return callback(err);
		}
		const exp = new RegExp(`.${extension}`);
		const files = data.filter((elem) => {
			if(elem.search(exp) > 0) {
				return true;
			}
		});
		return callback(null, files);
	});
};
