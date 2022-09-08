const ftoc = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  return round(celsius, 1);
};

const ctof = function(temp) {
  let fahrenheit = temp * 9 / 5 + 32
  return round(fahrenheit, 1)
};

function round(number, precision = 0) {
  const i = Math.pow(10, precision);
  return Math.round(number * i) / i;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
