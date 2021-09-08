'use strict';
// Coding Challenge #1---------------------------------------------------------
/*
// Data 1
// const dolphinScores = [44, 23, 71];
// const koalaScores = [65, 54, 49];

// Data 2
const dolphinScores = [85, 54, 41];
const koalaScores = [23, 34, 27];

const calcAverage = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

const avgDolphins = calcAverage(dolphinScores);
const avgKoalas = calcAverage(koalaScores);

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!`);
	} else
		console.log("It's a draw!");
};

console.log(`Dolphin Avg: ${avgDolphins}, Koalas Avg: ${avgKoalas}`);
checkWinner(avgDolphins, avgKoalas);


// Coding Challenge #2---------------------------------------------------------

function calcTip(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
console.log('bills:  ' + bills);

const tips = [];
bills.forEach(bill => {
	tips.push(calcTip(bill));
});

console.log('tips:   ' + tips);

const totals = [];
bills.forEach(bill => {
	const i = bills.indexOf(bill)
	totals.push(bills[i] + tips[i]);
})

console.log('totals: ' + totals);

// Coding Challenge #3---------------------------------------------------------

const mark = {
	fullName: 'Mark',
	mass: 78,
	height: 1.69,

	calcBmi: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
}

const john = {
	fullName: 'John',
	mass: 92,
	height: 1.95,

	calcBmi: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
}

const compareBMI = function () {
	if (mark.calcBmi() > john.calcBmi()) {
		return `${mark.fullName} has a BMI of ${mark.bmi}, higher than ${john.fullName}'s BMI of ${john.bmi}.`;
	} else {
		return `${john.fullName} has a BMI of ${john.bmi}, higher than ${mark.fullName}'s BMI of ${mark.bmi}.`;
	}
};

console.log(compareBMI());


// Coding Challenge #4---------------------------------------------------------

function calcTip(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i])
	tips.push(tip);
	totals.push(bills[i] + tip);
};

console.log('bills:  ' + bills);
console.log('tips:   ' + tips);
console.log('totals: ' + totals);

// Average bonus challenge
function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

console.log('Average Bill: ', calcAverage(totals));

*/