const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  return arr.reduce((sum, current) => 
    sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => 
  sum * current, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
    if (n < 0) return "Undefined for negative numbers";
    if (n = 0) return 0;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
