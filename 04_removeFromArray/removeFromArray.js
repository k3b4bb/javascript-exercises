const removeFromArray = function(a, b, ...c) {
    array = Array.from(arguments);
    result = [];
    for (let i = 0, l = array.length; i < l; i++) {
        if (Array.isArray(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
