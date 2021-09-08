// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // create blank array to add string elements
  const string = [];

  // loop through each element
  for (let i = 0; i < arr.length; i++) {
    // assemble portion of string with that loop iteration, user i position
    string.push(`... ${arr[i]} deg in ${i + 1} days`);
  }
  // add end '...'
  string.push("...");
  return string.join(" ");
};

console.log(printForecast(data1));
console.log(printForecast(data2));
