define(["jquery", "semantic", "domready!"], function ($) {

    var msg = "Default msg";

    function setMsg(str) {
        msg = str;
    }

    function initAjax(source) {
        var root = $(source);
        var url = $(root).data("url");
        $.ajax({
            url: "http://ieisys.com:12220/api/" + url,
            method: "GET",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                $.each(data.items, function (key, value) {
                    root.append($("<div>").attr("data-value", value._id).attr("class", "item").text(value.name));
                });
                root.parent().siblings().last().removeClass("active");
            }
        }).fail(function (data) {

        }).always(function () {

        });
    }


    function priceSectionUiInit() {
        $("#itemPrice").dropdown({
            onChange: function (value) {
                console.log("change dired");
                changePriceUi(value);
            }
        });
    }

    function changePriceUi(value) {
        switch (value) {
            case "fixed":
                $("#variable-segment").hide();
                $("#unit-segment").hide();
                $("#fixed-segment").show();
                break;
            case "variable":
                $("#variable-segment").show();
                $("#fixed-segment").hide();
                $("#unit-segment").hide();
                break;
            case "unit":
                $("#variable-segment").hide();
                $("#fixed-segment").hide();
                $("#unit-segment").show();
                break;

            default:
        }
    }

   

    return {
        initAjax: initAjax,
        setMsg: setMsg,
        priceSectionUiInit: priceSectionUiInit
    }
});