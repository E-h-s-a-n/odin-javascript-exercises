const leapYears = function(year) {
    let result = false;
    if ((year % 4) === 0 && (year % 25) !== 0) {
        result = true
    }
    if ((year % 16) === 0) {
        result = true
    }
    
    return result
};

// Do not edit below this line
module.exports = leapYears;
