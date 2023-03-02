const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
  let sum = 0;
  numArray.forEach(number => {
    sum += number;
  });
	return sum;
};

const multiply = function(numArray) {
  let finalNum = numArray[0];
  for (let i = 1; i < numArray.length; i++){
    finalNum *= numArray[i];
  }
  return finalNum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num < 0){
    return -1;
  } 
  else if (num == 0){
    return 1;
  } else {
    return (num * factorial(num - 1))
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
