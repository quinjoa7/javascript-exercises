const reverseString = function(string) {
    let stringAsList = string.split('');
    stringAsList.reverse();
    let text = stringAsList.join('');
    return text;
};
console.log(reverseString('hola'));

// Do not edit below this line
module.exports = reverseString;
