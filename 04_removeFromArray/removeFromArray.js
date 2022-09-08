const removeFromArray = function(inputArray, ...items) {
    for (const i of items){
        idx = inputArray.indexOf(i);
        if (idx !== -1){
            inputArray.splice(idx, 1);
        };
    };
    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 3, 4, 5], 'a', 2, 'ba'))

// let newArray = ['me', , , , , 'i']
// //Shows all indexes, including deleted
// newArray.find( (value, index) => {
//     // delete elements on first iteration
//     if(index === 0) {newArray.length = 0}
//     console.log(`index: ${index}, value: ${value}`)
// });
// console.log(newArray)