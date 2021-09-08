// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // C) fix bug
    value: Number(prompt('Degrees celsius:')),
    // value: 10,
  };
  // B) find bug
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify bug
console.log(measureKelvin());
