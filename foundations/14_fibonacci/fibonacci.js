const fibonacci = function(fib) {
//convert string to number
  const number = Number(fib);
  
  if (number < 0) {
    return "OOPS";
  }

  if (number === 0) {
    return 0;
  }

  let first = 1;
  let second = 1;

  for (let i = 3; i <= number; i++) {
    const next = first + second;
    first = second;
    second = next;
  }

  return second;
};


// Do not edit below this line
module.exports = fibonacci;
