const fibonacci = function(a) {
    const number = Number(a);
    const serie = [1,1];
    for (let i = 0; i < a - 2; i++) {
        serie.push(serie[i] + serie[i + 1]);
    }

    return number > 0 ? serie[serie.length - 1] : 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
