const removeFromArray = function(array, ...args) {

    for(let j = 1; j< arguments.length; j++){

            for(let i=0; i<array.length; i++){
                if (array[i] === arguments[j]) {
                    //ELIMINAR ARRAY[I]
                    array.splice(i, 1);
                }
            }
        }
    return array;

};

removeFromArray([1, 2, 3, 4], 2, 3);
// Do not edit below this line
module.exports = removeFromArray;
