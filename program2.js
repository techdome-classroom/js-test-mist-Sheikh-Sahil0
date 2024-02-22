/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntMap = {
        'i' : 1,
        'v' : 5,
        'x' : 10,
        'l' : 50,
        'c' : 100,
        'e' : 500,
        'd' : 1000
    };

    let total = 0;
    for (let i  = 0; i < s.length; i++) {
        const currentvalue = romanToIntMap[s[i]];
        if (i < s.length-1 && romanToIntMap[s[i]] < romanToIntMap[s[i+1]]) {
            total -= currentvalue;
        } else{
            total += currentvalue;
        }
    }

    return total;
};


module.exports={romanToInt}