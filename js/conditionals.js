(function () {
    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */
    function number() {
        var numberConfirm = confirm("Would you like to enter a number?");
        if (numberConfirm) {
            var numberEntered = prompt("What number would you like to use?");

            if (isNaN(numberEntered)) {
                alert("You did not give me a number!");
            } else {
                if (numberEntered % 2 === 1) {
                    alert("Your number is an odd number.");
                } else if (numberEntered % 2 === 0) {
                    alert("Your number is an even number.");
                }

                alert("Adding 100 to your number makes it " + (100 + parseFloat(numberEntered)));

                if (numberEntered > 0) {
                    alert("You gave me a positive number");
                } else if (numberEntered < 0) {
                    alert("You gave me a negative number");
                } else {
                    alert("You gave me 0, which is neither a positive nor a negative number");
                }
            }
        }
    }

    number();

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    function analyzeColor(color) {
        if (color === "red") {
            return "apples are red";
        } else if (color === "orange") {
            return "oranges are orange";
        } else if (color === "yellow") {
            return "bananas are yellow";
        } else if (color === "green") {
            return "limes are green";
        } else if (color === "blue") {
            return "blueberries are blue";
        } else if (color === "indigo") {
            return "indigo is a color";
        } else if (color === "violet") {
            return "violet is a color as well";
        } else {
            return "...ya there is no way that " + color + " is a color";
        }
    }


    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

    console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    var color = "";
    switch (color) {
        case "red":
            return "apples are red";
            break;
        case "orange":
            return "oranges are orange";
            break;
        case "yellow":
            return "bananas are yellow";
            break;
        case "green":
            return "limes are green";
            break;
        case "blue":
            return "blueberries are blue";
            break;
        case "indigo":
            return "indigo is a color";
            break;
        case "violet":
            return "violet is a color as well";
            break;
        default:
            return color + " is not an option";
            break;
    }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    color = prompt("Name a color please. (all lowercase)");
    alert(analyzeColor(color));


    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber, subTotalAmount) {
        var discountPercentage;
        switch (luckyNumber) {
            case 0:
                discountPercentage = 0;
                break;
            case 1:
                discountPercentage = .1;
                break;
            case 2:
                discountPercentage = .25;
                break;
            case 3:
                discountPercentage = .35;
                break;
            case 4:
                discountPercentage = .50;
                break;
            case 5:
                discountPercentage = 1;
                break;
            default:
                break;
        }
        var totalAmount = subTotalAmount - (subTotalAmount * discountPercentage);
        alert("Your Lucky Number: " + luckyNumber);
        alert("Your subtotal: $" + subTotalAmount);
        alert("Your total: $" + totalAmount);
    }

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    calculateTotal(luckyNumber, prompt("What is your bill total?"));

})();