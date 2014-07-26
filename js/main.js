$(document).ready(function () {

    // COLOURS ARRAY
    var colours = Array("green", "yellow", "blue", "red"),
        idx;

    $("#header").hover(function () {
        var div = $(this);
        var chars = div.text().split('');
        div.html('');
        for (var i = 0; i < chars.length; i++) {
            var idx = Math.floor(Math.random() * colours.length);
            var span = $('<span>' + chars[i] + '</span>').css("color", colours[idx])
            div.append(span);
        }

    }, function () {
        $(this).find('span').css("color", "orange");
    });

});
