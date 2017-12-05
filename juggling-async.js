var http = require('http');
let str = [];

const jugAsync = (index) => {
	http.get(process.argv[index + 2], (response) => {
		let temp = '';
		response.on('data', (data) => {
			temp += data.toString();
		});
		response.on('end', () => {
			str[index] = temp;
			temp = '';
			if(index === 2) {
				displayResults();
				return;
			}
			jugAsync(index + 1);
		});
	});
};

const displayResults = () => {
	str.map((elem) => {
		console.log(elem);
	});
	// console.log(str);
};

jugAsync(0);