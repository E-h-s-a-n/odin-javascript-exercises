const reverseString = function(text = '') {
    let reversed = '';
    let splitted = text.split('');
    // console.log('text=', text)
    for(let i=0; i<text.length; i++){
        reversed += splitted.pop();
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString('test!'));