define(["jquery", "iteminit", "semantic", "domready!"], function ($, iteminit) {

    // semantic init
    $(".accordion").accordion();
    $(".ui.dropdown").dropdown();
    $("#tag-input").dropdown({
        allowAdditions: true,
        apiSettings: {
            url: "http://ieisys.com:12220/api/tag"
        }
    });
    // end of semantic init

    $.each($(".menu-ajax-init"), function (key, value) {
        iteminit.initAjax(value);
    });

    iteminit.priceSectionUiInit();
});