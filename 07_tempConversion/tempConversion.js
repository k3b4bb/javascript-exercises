const convertToCelsius = function(temp) {
  return Math.round((5/9*(temp-32))*10) / 10
};

const convertToFahrenheit = function(temp) {
  return Math.round(((9/5)*temp +32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
