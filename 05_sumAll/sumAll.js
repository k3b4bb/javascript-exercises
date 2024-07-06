const sumAll = function(min, max) {
    if ((typeof min != 'number' || isNaN(min)) || (typeof max != 'number' || isNaN(max))) {
        return 'ERROR'
    } 

    if (min > max) {
        [min, max] = [max, min]
    }
    let result = 0;
    for (let i = min; i <= max; i++) {
        result += i;
    }
    if (result < 0) {
        return 'ERROR';
    };
    return result;
};

// Do not edit below this line
module.exports = sumAll;
