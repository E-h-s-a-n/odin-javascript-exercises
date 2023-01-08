const repeatString = function(text, repeatNum) {
    result = ''
    if (repeatNum < 0) result='ERROR'
    
    for(let i=0; i<repeatNum; i++){
        result += text
    }

    return result
};

// Do not edit below this line
module.exports = repeatString;
