const convertToCelsius = function(temp1) {
  let fahrenheit = ((temp1-32)*5)/9;
  if (fahrenheit % 1 !== 0) {
    return Number(fahrenheit.toFixed(1))
  }
  return fahrenheit;
};

const convertToFahrenheit = function(temp2) {
  let celcius = ((temp2*(9/5)) + 32);
  if (celcius % 1 !== 0) {
    return Number(celcius.toFixed(1));
  }
  return celcius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
