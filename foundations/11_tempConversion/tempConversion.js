const convertToCelsius = function(F) {
  const celsius = Math.round(((F - 32) * 5/9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(C) {
const fahrenheit = Math.round(((C * 9/5) + 32) * 10) / 10;
return fahrenheit;
};
//toFixed(2) returns a string so it's not available
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
