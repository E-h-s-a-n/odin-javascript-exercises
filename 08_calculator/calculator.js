const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((pre, cur)=>{
    // console.log(cur);
    return pre + cur;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((pre, cur) => pre * cur, 1);
};

const power = function(a, b) {
  // a to the power of b
  if (b==0) return 1
  return a * power(a, b-1)

};

const factorial = function(a) {
  if (a==1) return 1
  if (a==0) return 1
  return a * factorial(a-1);

	
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
