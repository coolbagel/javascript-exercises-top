const convertToCelsius = function(tempf) {
  let result=Math.round(((tempf-32)*(5/9)*10))/10;
  return result;
};

const convertToFahrenheit = function(tempc) {
  let result=Math.round((((tempc*(9/5))+32)*10))/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
