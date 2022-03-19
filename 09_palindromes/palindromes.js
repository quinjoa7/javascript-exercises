const palindromes = function (a) {
    const text = a.replace(/[!,. ]/g,"").toLowerCase();
    const textAsArray = text.split("");
    const first = textAsArray.splice(0,Math.floor(textAsArray.length / 2));
    textAsArray.reverse();

    if (first.length < textAsArray.length) {
        textAsArray.pop();
    }

    const q = first.toString();
    const w = textAsArray.toString();

    return q === w;
};
// Do not edit below this line
module.exports = palindromes;
