const removeFromArray = function(array, ...args) {
    let restart;

    do{
        restart = false;
        for(let i = 0; i < array.length; i++){
            for (let j = 0; j < args.length; j++)
            {
                if (array[i] === args[j]){
                    array.splice(i,1);
                    restart = true;
                }
            }
        }
    } while (restart);


    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
