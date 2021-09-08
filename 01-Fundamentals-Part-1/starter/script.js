// Variables --------------------------------------------------------------------------------------
/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Cameron');
console.log(23);

let firstName = "Katelyn";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable Name Conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "cameron";
let PI = 3.14159;

// good variable names
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// bad variable names
let job1 = 'programmer';
let job2 = 'teacher';

// Data Types -------------------------------------------------------------------------------------
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'cameron');

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Declaring Variables-----------------------------------------------------------------------------
let age = 30;
age = 31;

const birthYear = 1991;

var birthMonth = 'May'; // old method of declaring variables, use only for legacy code
birthMonth = 'July';

// Operators---------------------------------------------------------------------------------------
// Math Operators
const now = 2021
const ageCameron = now - 1990;
const ageJerry = now - 1985;
console.log(ageCameron, ageJerry);

console.log(ageCameron * 2, ageCameron / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, which equals 8

const firstName = 'Cameron';
const lastName = 'Kingsley';

console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x / 5 = 20
x++; // x = x + 1
console.log(x);

// Comparison Operators
console.log(ageCameron > ageJerry); // < > <= >=
console.log(ageJerry >= 18);

const isFullAge = ageJerry >= 18;
console.log(isFullAge);

console.log(now - 1990 > now - 1985);

// Operator Precedence-----------------------------------------------------------------------------
const now = 2021
const ageCameron = now - 1990;
const ageJerry = now - 1985;
console.log(now - 1990 > now - 1985);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageCameron + ageJerry) / 2;
console.log(ageCameron, ageJerry);
console.log(averageAge);

// Strings and Template Literals-------------------------------------------------------------------
const firstName = 'Cameron';
const job = 'programmer';
const birthYear = 1990;
const year = 2021;

// s$%#y way of writing a compund string
const cameron = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(cameron);

// Template Literal version, similar to string interpolation in ruby
const cameronNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(cameronNew);

// ` works for regular strings also
console.log(`Just a regular string using back ticks...`);

// multiline strings
// old way
console.log('String with \n\ multiple \n\	lines');

// new way using ``
console.log(`String
with multiple
lines`);

// Taking Decisions: If/Else Statements------------------------------------------------------------
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
	console.log('Sara can start driving license 🏎');
}
else {
	const yearsLeft = 18 - age;
	console.log(`Sara is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);


// Type Conversion & Coercion----------------------------------------------------------------------
// Type Conversion
const inputYear = '1990';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

// Type Coercion
console.log('I am ' + 23 + ' years old');
// '+' will trigger a conversion to strings and concantonate strings
console.log('23' - '10' - 3);
// '-', '*' and '/' will trigger a conversion to numbers and evaluate
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');


// Truthy and Falsey Values------------------------------------------------------------------------
// 5 falsey values: 0, '', undefined, null, NaN
// everything else is truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('string'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log('You should get a job')
}

let height;

if (height) {
	console.log('Yay! Height is defined!')
} else {
	console.log("height is undefined........")
}


// Equality operators------------------------------------------------------------------------------
const age = '18';
if (age === 18) console.log('You just became an adult (strict)')
if (age == 18) console.log('You just became an adult (loose)')

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favorite === 13) {
	console.log("Yay! That is the only correct answer!!")
} else {
	console.log("That is not 13!")
}

if (favorite !== 13) {
	console.log("That is the wrong answer, you are silly for liking any other number than 13!")
}


// Boolean logic-----------------------------------------------------------------------------------

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
	console.log("Sara is able to drive!")
} else {
	console.log("Someone else should drive....")
}

const isTired = false // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log("Sara is able to drive!")
} else {
	console.log("Someone else should drive....")
}


// Case Statements---------------------------------------------------------------------------------

const day = 'tuesday'

// switch (day) {
// 	case 'monday':
// 		console.log("it is monday, the worst day of the week");
// 		console.log('if i was working a desk job! hahahaha');
// 		break;
// 	case 'tuesday':
// 		console.log('tacos!!!')
// 		break;
// 	case 'wednesday':
// 		console.log('hump day!')
// 		break;
// 	case 'thursday':
// 		console.log('thirsty thursday');
// 		break;
// 	case 'friday':
// 		console.log('cryday!');
// 		break;
// 	case 'saturday':
// 	case 'sunday':
// 		console.log("WEEKEND!!!!!");
// 		break;
// 	default:
// 		console.log('Not a valid date you derp!');
// }

// convert this to if/else statement challenge

if (day === 'monday') {
	console.log("it is monday, the worst day of the week");
	console.log('if i was working a desk job! hahahaha');
} else if (day === 'tuesday') {
	console.log('tacos!!!');
} else if (day === 'wednesday') {
	console.log('hump day!');
} else if (day === 'thursday') {
	console.log('thirsty thursday');
} else if (day === 'friday') {
	console.log('cryday!');
} else if (day === 'saturday' || day === 'sunday') {
	console.log("WEEKEND!!!!!");
} else {
	console.log('Not a valid date you derp!');
}


// Expressions and Statements----------------------------------------------------------------------

// expressions
3 + 4
1990
true && false && !true

// Statements
if (23 > 10) {
	const str = '23 is bigger'
}
// expressions are like words and statements are like sentences

// Ternary Operator-------------------------------------------------------------------------------

const age = 23;
age >= 18 ? console.log('I like to drink wine!') : console.log('I cannot drink wine...');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${drink}`);
*/