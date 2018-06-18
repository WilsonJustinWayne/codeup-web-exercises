
// ### Create a calculator fx
//
// - Create a calculator function that takes 4 parameters, the first one is a number, the second is an operator string literal,
//  the third it's another number and the fourth will determine the number of decimals the result should be rounded.
//  The following operator symbols are valid in your function:
//
//     ```
// 'add' = +
// 'sub' = -
// 'mul' = *
// 'div' = /
// 'mod' = % (This should give you the modulus from param 1 % param 2)
// 'neg' = ¬
// 'sqr' = √ (This should give you the square root of each parameter number)
// ```
//
// - Make sure you handle invalid operators and show an error message.

function calculator(number, operator, anotherNumber, decimal) {
    var result;
    parseFloat(number);
    parseFloat(anotherNumber);
    parseInt(decimal);
    switch (operator) {
        case "add":
            result = (number + anotherNumber).toFixed(decimal);
            return result;
        case "sub":
            result = (number - anotherNumber).toFixed(decimal);
            return result;
        case "mul":
            result = (number * anotherNumber).toFixed(decimal);
            return result;
        case "div":
            result = (number / anotherNumber).toFixed(decimal);
            return result;
        case "mod":
            result = (number % anotherNumber).toFixed(decimal);
            return result;
        case "neg":
            result = ((number - (number * 2)).toFixed(decimal) + ", " + (anotherNumber - (anotherNumber * 2))).toFixed(decimal);
            return result;
        case "sqr":
            result = (Math.sqrt(number).toFixed(decimal) + ", " + Math.sqrt(anotherNumber)).toFixed(decimal);
            return result;
    }
}

alert(calculator(prompt("first number"), prompt("operator"), prompt("second number"), prompt("decimal place")));