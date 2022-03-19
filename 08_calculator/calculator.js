const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	const result = a.reduce((total, number) => {
    return total + number;
  }, 0)
  return result;
};

const multiply = function(a) {
  const result = a.reduce((total, number) => {
    return total * number;
  }, 1)
  return result;
};

const power = function(a,b) {
  let result = a;
	for (let i = 2; i <= b; i++) {
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
  let result = 1;
	for (let i = 1; i <= a; i++) {
    result = result * i;
  }
  return result;
};
console.log(power(4,3))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
