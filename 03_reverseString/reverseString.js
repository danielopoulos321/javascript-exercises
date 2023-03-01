const reverseString = function(string) {
    const charArray = string.split('');
    let reversed = '';

    for (let i = 0; i < charArray.length; i++){
        reversed += charArray[(charArray.length-1)-i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
