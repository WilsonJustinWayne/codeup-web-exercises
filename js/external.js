"use strict";

console.log("Hello from External JavaScript");

alert("Welcome to my Website!!!");

var favColor = prompt("What is your favorite color?");

alert("Your favorite color is " + favColor + "? MINE IS TOO!!!");


var littleMermaidDaysRented = prompt("How many days have you rented \"The Little Mermaid\" for?");
var brotherBearDaysRented = prompt("How many days have you rented \"Brother Bear\" for?")
var herculesDaysRented = prompt("How many days have you rented \"Hercules\" for?");
var movieCostPerDay = prompt("How much does it cost per movie per day?");
var paymentForMovies = (littleMermaidDaysRented * movieCostPerDay) + (brotherBearDaysRented * movieCostPerDay) + (herculesDaysRented * movieCostPerDay);
alert("You will be charged: $" + paymentForMovies);


// how much google pay
var googlePayRate = prompt("How much does Google pay per hour?");
// how many hours at google
var googleHoursThisWeek = prompt("How many hours this week have you worked for Google?");
// how much does amazon pay
var amazonPayRate = prompt("How much does Amazon pay per hour?");
// how many hours at amazon
var amazonHoursThisWeek = prompt("How many hours this week have you worked for Amazon?");
// how much does fb pay
var fbPayRate = prompt("How much does Facebook pay per hour?");
// how many hours at fb
var fbHoursThisWeek = prompt("How many hours this week have you worked for Facebook?");
var payThisWeek = (googlePayRate * googleHoursThisWeek) + (amazonPayRate * amazonHoursThisWeek) + (fbPayRate * fbHoursThisWeek);
alert("You will make $" + payThisWeek + " this week!"); // you will make this moneys


// is class full
var isClassNotFull = confirm("Is there room in the class?");
// does schedule conflict with school schedule
var isNotScheduleConflict = confirm("Do you have a free schedule?");
var isAbleToEnroll = isClassNotFull && isNotScheduleConflict;
var enrollMessage = "";
if (isAbleToEnroll) {
    enrollMessage = "Enrollment is possible";
} else {
    enrollMessage = "Enrollment is not possible";
}
alert(enrollMessage);


// is the offer expired
var isOfferNotExpired = confirm("Is the offer prior to the Expiration date?");
// how many items purchased
var numberOfItemsPurchased = prompt("How many items are being purchased?");
// how many items need to be purchased for discount
var numberOfItemsForDiscount = prompt("How many items need to be purchased to get the discount?")
// are you a premium member
var isPremiumMember = confirm("Are you a Premium Member?");
var isOfferAvailable = (isPremiumMember || (numberOfItemsPurchased >= numberOfItemsForDiscount)) && isOfferNotExpired;
var offerMessage = ""
if (isOfferAvailable) {
    offerMessage = "The Discount is available for you!";
} else {
    offerMessage = "The Discount is not available for you!";
}
alert(offerMessage);
