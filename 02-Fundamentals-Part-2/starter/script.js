'use strict';
/*
// Strict Mode-----------------------------------------------------------------
let hasDriversLicense = false;
const passTest = true;

// strict will catch undeclared variables and help find errors
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :)');

// catches reserved words, these dont work...
const interface = 'Audio';
const private = 589;
const if = 464;



// Functions-------------------------------------------------------------------
function logger() {
	console.log('I have logged something to the console');
}
// calling/running/invoking the function
logger();

function fruitProcessor(apples, oranges) {
	console.log(`you have ${apples} apples and ${oranges} oranges.`);
	const juice = (`We made juice from ${apples} apples and ${oranges} oranges.`);
	return juice;
}

const greatJuice = fruitProcessor(3, 5);
console.log(greatJuice);
console.log(fruitProcessor(14, 9));


// Function declaration vs expressions-----------------------------------------
// ^^^^ these above are declarations

function calcAge1(birthYear) {
	// const age = 2056 - birthYear;
	// return age;

	// can also write the above as 1 line:
	return 2056 - birthYear;
}

const age1 = calcAge1(1990);

// Expression fuction

const calcAge2 = function (birthYear) {
	return 2056 - birthYear;
}

const age2 = calcAge2(1990);

console.log(age1, age2);

// Arrow Functions-------------------------------------------------------------

const calcAge3 = birthYear => 2056 - birthYear;

const age3 = calcAge3(1990);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2056 - birthYear;
	const retirement = 70 - age;
	return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1990, 'Timmy'));

// Functions Calling other functions-------------------------------------------

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	// console.log(`you have ${applePieces} apples and ${orangePieces} oranges.`);
	const juice = (`We made juice from ${applePieces} apple slices and ${orangePieces} orange slices.`);
	return juice;
	// console.log(juice);
}

console.log(fruitProcessor(3, 5));
// Reviewing Functions---------------------------------------------------------

const calcAge = function (birthYear) {
	return 2056 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 70 - age;

	if (retirement > 0) {
		return `${firstName} retires in ${retirement} years.`;
	} else {
		console.log(`${firstName} has already retired! :D`);
		return -1;
	}
}

console.log(yearsUntilRetirement(1990, 'Bob'));
console.log(yearsUntilRetirement(1980, 'Mark'));


// Arrays----------------------------------------------------------------------

	const friends = ['Bob', 'Tim', 'Jimmy'];
// or
	const years = new Array(1990, 1985, 2002, 1857);

	console.log(friends[0]);
	console.log(friends.length);
	console.log(friends[friends.length - 1]);

	friends[2] = 'Dave';
	console.log(friends);

	const cam = ['Cam', 'Kingsley', 2056 - 1990, friends, 'developer'];

// Array Methods---------------------------------------------------------------
	const friends = ['Bob', 'Tim', 'Jimmy'];
// 'push' adds to end of array, returns length of array
	friends.push('Jimothy');
	console.log(friends);

// 'unshift' adds to front of array
	friends.unshift('Andy');
	console.log(friends);

// 'pop' removes the last element and returns the removed element
	console.log(friends.pop());

// 'shift' removes and returns the first element of an array
	console.log(friends.shift());

// 'indexOf' returns position of element
	console.log(friends.indexOf('Tim'));
// returns -1 for elements not found
	console.log(friends.indexOf('Timothy'));

// 'includes' returns true/false if array includes element, uses strict equality (===)
	console.log(friends.includes('Tim'));
	console.log(friends.includes('Timothy'));

	if (friends.includes('Bob')) {
		console.log('You have a friend named Bob!');
	}

	// Objects---------------------------------------------------------------------
	// key: value
	const cam = {
		firstName: 'Cameron',
		lastName: 'Kingsley',
		age: 2056 - 1990,
		job: 'unemployed loser',
		friends: ['Bob', 'Dave', 'Jimmy']
	}

	console.log(cam.firstName);
	console.log(cam.job);
	// etc.

	// Dot vs Bracket Notation-----------------------------------------------------
	// Dot
	console.log(cam.firstName);
	console.log(cam.job);

	// Bracket - can use expressions inside the brackets, but not on dot
	console.log(cam['lastName']);

	const nameKey = 'Name';
	console.log(cam['first' + nameKey]);
	console.log(cam['last' + nameKey]);

	const interestedIn = prompt('What do you want to know about cam?');
	console.log(interestedIn);
	console.log(cam[interestedIn]);

	if (cam[interestedIn]) {
		console.log(cam[interestedIn]);
	} else {
		console.log("That is not a valid attribute you ding dong!");
	}

	// setting attributes
	cam.location = 'Seattle';
	cam['hobby'] = 'making';

	// Challenge
	// "Cam has 3 friends, and his best friend is called michael"
	console.log(`${cam.firstName} has ${cam.friends.length} friends, and his best friend is ${cam.friends[0]}!`);

	// Object Methods--------------------------------------------------------------

	const cam = {
		firstName: 'Cameron',
		lastName: 'Kingsley',
		age: 2056 - 1990,
		birthYear: 1990,
		job: 'unemployed loser',
		friends: ['Bob', 'Dave', 'Jimmy'],
		hasDriversLicense: true,

		// this vvv
		// calcAge: function () {
			// 	return 2056 - this.birthYear;
			// }
			// ^^^

			calcAge: function () {
				this.age = 2056 - this.birthYear;
				return this.age;
			},

			getPhrase: function () {
				return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, ${this.hasDriversLicense ? 'with' : 'without'} a drivers license.`;
			}
		};

	console.log(cam.age);
	console.log(cam.age);
	console.log(cam.age);
	console.log(cam.age);

	// or
	// console.log(cam['calcAge'](1990));

	// mini challenge
	// "Cam is a 66 year old teacher, with a drivers license."


	console.log(cam.getPhrase());

	// Loops-----------------------------------------------------------------------

	// weight lifting example
	for (let rep = 1; rep <= 10; rep++) {
		console.log(`Lifting weights rep ${rep}.`);
	}

	// Looping arrays and breaking loops

	const cam = [
		'Cam',
		'Kingsley',
		2056 - 1990,
		['Sean', 'Bob', 'Dave', 'Jimmy'],
		'developer'
	];

	const types = [];

	for (let i = 0; i < cam.length; i++) {
		// reading from array
		console.log(cam[i], typeof cam[i]);
		// Filling 'types' array
		// types[i] = typeof cam[i];
		// alt way of filling array
		types.push(typeof cam[i]);
	};

	console.log(types);

	const years = [1991, 1956, 2056, 1945];
	const ages = [];

	for (let i = 0; i < years.length; i++) {
		ages.push(2056 - years[i]);
	}
	console.log(ages);

	// Continue and break
	console.log('---ONLY STRINGS---');
	for (let i = 0; i < cam.length; i++) {
		// continue exits the current iteration and proceeds to next
		if (typeof cam[i] !== 'string') continue;

		console.log(cam[i], typeof cam[i]);
	};

	console.log('---BREAK WITH NUMBER---');
	for (let i = 0; i < cam.length; i++) {
		// continue exits the current iteration and proceeds to next
		if (typeof cam[i] === 'number') break;

		console.log(cam[i], typeof cam[i]);
	};

// Looping backwards and loops in loops----------------------------------------

	const cam = [
		'Cam',
		'Kingsley',
		2056 - 1990,
		['Sean', 'Bob', 'Dave', 'Jimmy'],
		'developer'
	];

	// backwards loop
	for (let i = cam.length - 1; i >= 0; i--) {
		console.log(i, cam[i], typeof cam[i]);
	}

	for (let exercise = 1; exercise < 4; exercise++) {
		console.log(`-----Starting exercise ${exercise}`);

		for (let rep = 1; rep <= 5; rep++) {
			console.log(`Lifting weights rep ${rep}!`);
		}
	}

	*/
// While Loop------------------------------------------------------------------

	// for (let rep = 1; rep <= 10; rep++) {
	// 	console.log(`Lifting weights rep ${rep}.`);
	// }

	// let rep = 1;
	// while (rep <= 10) {
	// 	console.log(`While: Lifting weights rep ${rep}.`);
	// 	rep++;
	// }

	// rolling dice example
	// let dice = Math.trunc(Math.random() * 6) + 1;

	// function diceRoll() {
	// 	dice = Math.trunc(Math.random() * 6) + 1;
	// }

	// while (dice !== 6) {
	// 	console.log(`you rolled a ${dice}`);
	// 	diceRoll();
	// 	if (dice === 6) console.log('Loop is about to end...');
	// }