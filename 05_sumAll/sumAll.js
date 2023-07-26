const sumAll = function(a, b) {

    if(a<0 || b<0) return `ERROR`;
    if(typeof a===`string` || typeof b===`string`) return `ERROR`;
    if(isNaN(a) || isNaN(b)) return `ERROR`;

    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
    let i;

    for (i= min; i<=max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
