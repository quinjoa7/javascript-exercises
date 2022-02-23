const ftoc = function(temp) {
  let number = (temp - 32) * 5 / 9;
  return parseFloat(number.toFixed(1));
};

const ctof = function(temp) {
  let number = temp * 9 / 5 + 32
  return parseFloat(number.toFixed(1));
};
console.log(ftoc(100))
console.log(ctof(73.2))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
