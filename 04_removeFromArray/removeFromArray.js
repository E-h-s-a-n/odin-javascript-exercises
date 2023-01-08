const removeFromArray = function(inputArray, ...items) {
    // for (const i of items){
    //     idx = inputArray.indexOf(i);
    //     if (idx !== -1){
    //         inputArray.splice(idx, 1);
    //     };
    // };
    const result = inputArray.filter(element => {
        return !items.includes(element);
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 3, 4, 5], 'a', 2, 'ba'))