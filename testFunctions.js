const add = (num1, num2) => {
	return num1 + num2;
};

let myArr = ['Dan', 'Stuart', 'Ben'];

const NotNull = () => {
	return 20;
};

const getTruthy = () => {
	return '1';
};

const notFalsy = () => {
	return '1';
};

const createObj = () => {
	return { firstName: 'Adam', Age: 27 };
};

const getItems = (array) => {
	return array.filter((e) => e.length >= 6);
};

const toString = (num) => {
	return num.toString();
};

const getPlanetFromOrder = (order) => {
	const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
	return planets[order - 1];
};

const countAmountOfPresentStudents = (attendanceArray) => {
	return attendanceArray.filter((attendance) => attendance === true).length;
};

const squareAndConcat = (digits) => {
	const digitString = digits.toString().split('');
	const result = digitString.reduce((prev, cur) => {
		prev += cur ** 2;
		return prev;
	}, '');
	return parseInt(result);
};

const convertYearToCentury = (year) => {
	return Math.floor(year / 100);
};

const binary = (binaryArray) => {
	return binaryArray.reverse().reduce((prev, curr, index) => {
		prev += curr === 1 ? 2 ** index : 0;
		return prev;
	}, 0);
};

module.exports = {
	add,
	myArr,
	NotNull,
	getTruthy,
	notFalsy,
	createObj,
	getItems,
	toString,
	getPlanetFromOrder,
	countAmountOfPresentStudents,
	squareAndConcat,
	convertYearToCentury,
	binary,
};