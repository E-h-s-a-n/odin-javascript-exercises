const sumAll = function(start, stop) {
    let result = 0;
    let min = start;
    let max = stop;

    if (start<0 || stop<0) { 
        result = 'ERROR'
    } else if (typeof start !== 'number' || typeof stop !== 'number'){
        result = 'ERROR';
    } else if (start > stop) {
        min = stop;
        max = start;
    }
    if (result === 0) {
        for (let i=min; i <= max; i++){
            result += i;
        };
    };

    return result;
};

// Do not edit below this line
module.exports = sumAll;

// console.log(sumAll(1, 5))
