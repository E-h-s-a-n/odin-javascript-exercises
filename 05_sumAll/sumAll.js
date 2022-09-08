const sumAll = function(start, stop) {
    result = 0;
    for (let i=start; i <= stop; i++){
        result += i;
    };

    return result
};

console.log(sumAll(1, 5))

// Do not edit below this line
module.exports = sumAll;

