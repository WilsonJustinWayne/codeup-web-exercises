// (function () {
//     "use strict";
//
//     for (var i = 0; i < 8; i++) {
//         var userInput = prompt("Please enter an odd number between 1 and 50.");
//         if (userInput % 2 === 1) {
//             for (var j = 1; j <= 50; j++) {
//                 if (j % 2 === 0) {
//                     continue;
//                 }
//                 if (j == userInput) {
//                     console.log("Yikes! skipping number " + j);
//                 }
//                 console.log("Here is an odd number: " + j);
//             }
//             break;
//         }
//     }
//
//
// })();