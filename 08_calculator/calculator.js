const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
  return nums.reduce((num, acc) => num + acc, 0)
};

const multiply = function(nums) {
  return nums.reduce((actual, total) => actual * total, 1);
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  else {
    return num * factorial(num - 1)
  }
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
