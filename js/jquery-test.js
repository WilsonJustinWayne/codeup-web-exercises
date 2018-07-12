"use strict";

$(function () {
    $('h1').click(function () {
        $(this).css('background', 'magenta');
    });

    $('p').dblclick(function () {
        $(this).css('font-size', '18px');
    });

    $('h1, p').hover(function () {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', 'black');
    })
});