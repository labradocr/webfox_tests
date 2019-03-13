function generateRandomNumbers(number) {
	var i;
	var array = [];
	for (i=0; i<number; i++) {
		array.push(Math.random() * 99);
	}
	array.sort((a,b) => a-b);
	console.log(array);
	return array[0];
};

generateRandomNumbers(500);