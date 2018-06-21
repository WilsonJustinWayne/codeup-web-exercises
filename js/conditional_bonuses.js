// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case


function favoriteDayOfTheWeek() {
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    do {
        var day = prompt("What is your favorite day of the week?");
        day = day.toLowerCase();
        if (days.indexOf(day) < 0) {

        }
    } while (days.indexOf(day) < 0);

    switch (day) {
        case "monday":
            return "LIAR!!! Nobody likes mondays!";
        case "tuesday":
            return "Tuesdays are ok.... for peasants";
        case "wednesday":
            return "HUMP DAYYYYYYYYYY";
        case "thursday":
            return "well some people have thursday as their friday so that makes sense I guess";
        case "friday":
            return "Friday i feel is the most popular weekday due to its close proximity to the weekend";
        case "saturday":
            return "Saturday is MY favorite weekend day because its my day of explicit and unadulterated laziness";
        case "sunday":
            return "Ah, yes.... sunday................";
    }
}

alert(favoriteDayOfTheWeek());

//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator

function isNumberMaybe(input) {
    if (!isNaN(parseFloat(input))) {
        return input + " is a number"
    } else if (input === "Is mayonnaise an instrument?") {
        return "No, Patrick. Mayonnaise is not an instrument."
    } else {
        return input + " is not a number"
    }
}

alert(isNumberMaybe(prompt("Gimme a number please... or don't, whatever")));

// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available
// in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

function seasons() {
    var season = "";
    var seasonMonth1;
    var seasonMonth2;
    var seasonMonth3;
    do {
        var ifError = false;
        season = prompt("Choose a season.(ex. spring, summer, winter, fall)")
        season.toLowerCase();
        if (season === "spring") {
            seasonMonth1 = "march";
            seasonMonth2 = "april";
            seasonMonth3 = "may";
        } else if (season === "summer") {
            seasonMonth1 = "june";
            seasonMonth2 = "july";
            seasonMonth3 = "august";
        } else if (season === "fall") {
            seasonMonth1 = "september";
            seasonMonth2 = "october";
            seasonMonth3 = "november";
        } else if (season === "winter") {
            seasonMonth1 = "december";
            seasonMonth2 = "january";
            seasonMonth3 = "february";
        } else {
            alert("You must have spelled something wrong or something try again");
            ifError = true;
        }
    } while (ifError);

    do {
        var switchError = false;
        var month = prompt("Choose a " + season + " month.(ex. " + seasonMonth1 + ", " + seasonMonth2 + ", " + seasonMonth3 + ")");
        month.toLowerCase();
        switch (month) {
            case seasonMonth1:
                return "That is the first month of " + season;
            case seasonMonth2:
                return "That is the second month of " + season;
            case seasonMonth3:
                return "That is the third month of " + season;
            default:
                alert("You must have spelled something wrong or something try again");
                switchError = true;
        }
    } while (switchError);
}

alert(seasons());

// GOLD STAR BONUS
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
    var originalUnitOfMeasurement = prompt("Please enter unit of measurement");
//     Prompt the user for a value.
    var originalValue = prompt("Please enter value to be converted");
//     Prompt the user for a second unit of measurement to convert to.
    var newUnitOfMeasure = prompt("Please enter new unit of measure");
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units

