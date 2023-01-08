const palindromes = function (words) {
    words = words.toLowerCase()
    
    const aa = [...words].filter((v) => {
        return 'abcdefghijklmnopqrstuvwxyz'.includes(v)
    });
    
    return (aa.join("") === aa.reverse().join(""))
    
    // let result
    // const len = aa.length
    // for (let i = 0; i < len/2; i++) {
    //     result = aa[i] == aa[len-i-1]
    //     if (!result) break
    // }
    // return result
};

palindromes('Racecar!')

// Do not edit below this line
module.exports = palindromes;