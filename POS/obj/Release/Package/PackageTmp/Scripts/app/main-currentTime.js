require(["jquery", "moment"],
    function($, moment) {
        "use strict";

        var now = new moment().format("M/D/YYYY h:mm:ss A");

        $("#CurrentDateTime").text = now;
    })