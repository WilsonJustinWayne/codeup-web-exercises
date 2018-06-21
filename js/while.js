// (function () {
//     "use strict";
//
//     var i = 2;
//
//     while (i <= 65536) {
//         console.log(i);
//         i = i * 2;
//     }
//
//     function iceCreamSeller(totalCones) {
//         var conesBeingPurchased;
//         console.log(totalCones + " total cones.");
//         do {
//             console.log(conesBeingPurchased = (Math.floor(Math.random() * 5) + 1));
//             if (conesBeingPurchased <= totalCones) {
//                 console.log(conesBeingPurchased + " cones sold... ");
//                 totalCones = totalCones - conesBeingPurchased;
//                 console.log(totalCones + " cones left");
//             } else {
//                 console.log("Cannot sell you " + conesBeingPurchased + " I only have " + totalCones + "...");
//                 totalCones = 0;
//             }
//         } while (totalCones > 0);
//         console.log("Yay! I sold them all!");
//     }
//
//     var randomNumber = Math.floor(Math.random() * 50) + 50;
//     iceCreamSeller(randomNumber);
// })();
