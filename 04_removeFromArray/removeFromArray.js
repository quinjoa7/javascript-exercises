const removeFromArray = function(array, ...toRemove) {
    let list = array;
    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] === toRemove[i]) {
                list.splice(j,1);
            }
        }
    }
    return list;
};
// Do not edit below this line
module.exports = removeFromArray;
