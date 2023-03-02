const caesar = function(string, shiftNum) {
    let cipher = '';

    for (let i = 0; i < string.length; i++){
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)){
            cipher = cipher.concat(String.fromCharCode(string.charCodeAt(i) + shiftNum)); 
        } else {
            cipher = cipher.concat(string[i]);
        }
    }
    return cipher;
};

//if character is a lower or upper letter, shift it
//if it is a number, space, punctutation etc add it to new string as is

// Do not edit below this line
module.exports = caesar;
