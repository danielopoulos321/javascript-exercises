const fibonacci = function(number) {
let num1 = 0;
let num2 = 0;
let currentNum = 1;

if (number < 0){
    return 'OOPS';
}

    for (let i = 1; i < number; i++){
        num1 = num2;
        num2 = currentNum;
        currentNum = num1 + num2;
    }
return currentNum;
};

//Loop through numbers until specified number
//update 2 variables with last 2 numbers
//make 3rd varible the sum of last 2 numbers
//shift numbers down each loop

// Do not edit below this line
module.exports = fibonacci;
