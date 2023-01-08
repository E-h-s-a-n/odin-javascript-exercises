const fibonacci = function(n=1) {
    fib = [1, 1];
    n = (+n) - 1
    if (n<0) return "OOPS"; //error

    for(let i=1; i<n; i++){
        fib.push(fib[i-1]+fib[i]);
    }
    // console.log(fib);
    return fib[n];
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;

// map filter every some reduce sort