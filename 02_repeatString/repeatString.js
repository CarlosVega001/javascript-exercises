const repeatString = function(string, num) {
    let repet= ``;
    if(num<0) return `ERROR`;
    for(let i=1 ; i <= num; i++){
        repet += string;
    }
    return repet;
};

// Do not edit below this line
module.exports = repeatString;
