const sumAll = function(firstInt, secondInt) {
    let total = 0;
    let first = 0;
    let second = 0;

    if (firstInt < 0 || secondInt < 0 || typeof(firstInt) != typeof(secondInt)) {
        return 'ERROR';
    }

    if (firstInt < secondInt) {
        first = firstInt;
        second = secondInt;
    } else if (secondInt < firstInt) {
        first = secondInt;
        second = firstInt;
    }

    for (let i = first; i <= second; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
