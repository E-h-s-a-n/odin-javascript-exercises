const ftoc = function(temp) {
  const celsius = (temp - 32) * 5 / 9;
  return round(celsius, 1);
};

const ctof = function(temp) {
  const fahrenheit = temp * 9 / 5 + 32
  return round(fahrenheit, 1)
};

function round(value, precision = 0) {
  const i = Math.pow(10, precision);
  return Math.round(value * i) / i;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
