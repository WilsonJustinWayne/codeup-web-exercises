// ================================= WARM UP
// The following should be done in your codeup-web-exercises repo...
//     Add and commit any work and push before starting this exercise.
//     Create an html file called pre-ajax.html
// - add a div with an id of 'names-list'
// - add a button after the div with an id of 'add-names-btn'
// Create a js file called pre-ajax.js
// - add a use strict and a $(document).ready(function() {});
// - add the following...
//     var people = [
//     {
//         name: "Fred",
//         favColor: "red"
//     },
//     {
//         name: "Sally",
//         favColor: "blue"
//     },
//     {
//         name: "Tom",
//         favColor: "yellow"
//     }
// ];
//
// - add functionality to the button so that when it is clicked, an unordered list of names from the people array (included below) is added to the inner HTML of the div#names-list. For an extra bonus, make the font color of each list item map to that person's favColor value.
// hints...
// - You should iterate over every object in the person array
// - For each object you should build an HTML string including the proper opening and closing tags to make the unordered list
// - using functions will help better organize your code
// - using jQuery will simplify the code needed
// - don't forget to create a branch to add and commit your work, then merge with the master
(function () {
    "use strict";
    $(document).ready(function () {
        var people = [
            {
                name: "Fred",
                favColor: "red"
            },
            {
                name: "Sally",
                favColor: "blue"
            },
            {
                name: "Tom",
                favColor: "yellow"
            }
        ];

        function buildList() {
            var html = "";
            html += "<ul>";
            people.forEach(function (person) {
                html += "<li id=" + person.name + ">" + person.name + "</li>";
            });
            html += "</ul>";
            return html;
        }

        $('#add-names-btn').click(function () {
            var html = buildList();
            $('#names-list').html(html);
            people.forEach(function (person) {
                $('#' + person.name).css('color', person.favColor);
            });
        });
    });
})();