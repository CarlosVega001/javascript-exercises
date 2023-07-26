const reverseString = function(string) {

    string = string.split("");
    let inverso = [];
    for(let i= string.length -1; i>=0; i--){
        inverso.push(string[i]);
    }

    inverso = inverso.join("");
    return inverso;
    
    

};

reverseString(`Galletitas`)

// Do not edit below this line
module.exports = reverseString;
