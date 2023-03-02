const palindromes = function (string) {
    let modString = string.toLowerCase().replace(/[^a-z]/g, "");
    let reversed = modString.split("").reverse().join("");

    for (let i = 0; i < string.length; i++){
        if (modString[i] != reversed[i]){
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
