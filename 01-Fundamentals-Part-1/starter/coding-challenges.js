// Challenge #1----------------------------------

// Test Data Set 1
// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markMass = 78;
// const johnMass = 92;

// Test Data Set 2
const markHeight = 1.88;
const johnHeight = 1.76;
const markMass = 95;
const johnMass = 85;


const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log('Data Set 2: ', 'Mark: ', markBMI, 'John: ', johnBMI, 'Mark is Chonkier?: ', markHigherBMI);

// BMI = mass / height ** 2 
