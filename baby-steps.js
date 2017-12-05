const Add = (args) => {
	let sum = 0;
	sum = args.reduce((a, b) => {
		return parseInt(a)+parseInt(b);
	});
	console.log(sum);
};

Add(process.argv.slice(2));