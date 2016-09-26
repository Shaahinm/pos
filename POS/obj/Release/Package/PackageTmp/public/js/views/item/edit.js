require(["jquery", "iteminit", "jqueryvalidate", "semantic", "domready!"], function ($, iteminit, val) {

    // semantic init
    $(".accordion").accordion();
    $(".ui.dropdown").dropdown();
    $(".menu .item").tab();
    $(".ui.checkbox").checkbox();

    $("#tag-input").dropdown({
        allowAdditions: true,
        maxSelections: 5,
        apiSettings: {
            url: "http://ieisys.com:12220/api/tag/{query}"
}
    });

    var radioName = 0;

    $.each($(".ajax-caller"), function (key, value) {
        iteminit.initAjax(value);
    });

    iteminit.priceSectionUiInit();

    $("#btnAddGroupSingleChoice").on("click", addAGroupSingleChoice);



    function addAGroupSingleChoice() {
        var $content = $("#group-single-choice-content");
        $content.find(".example").hide();
        var $newContent = $(".single.group.template").clone();
        $newContent.find(".remove-single-group").click(function () {
            $(this).closest(".row").remove();
        });

        $newContent.find(".btnAddOptionSingleChoice").click(function (e) {
            addOptionSingleChoice(e, radioName);
        });

        radioName += 1;

        $content.append($newContent.children());
    };

    function addOptionSingleChoice(e, name) {
        var sender = e.target;
        var $container = $(sender).parent().siblings().find(".optionContainer");
        var $newContent = $("#single-option-template").clone();
        $newContent.find(".ui.radio.checkbox").checkbox();
        $newContent.find(".ui.radio.checkbox").find("input").attr("name", "isBase" + name);

        $newContent.find(".remove").click(function () {
            $(this).closest(".row").remove();
        });
        $container.append($newContent.children());
    }

    function removeSingleOption() {
        $(this).closest(".row").remove();
    }


    // form validation

    $("#btnSave").on("click", function () {
        $("#CreateItemForm").form("submit");
    });

    $("#CreateItemForm")
   .form({
       on: "blur",
       inline: true,
       fields: {
           itemName: {
               identifier: "itemName",
               rules: [
                 {
                     type: "empty",
                     prompt: "این فیلد اجباری میباشد"
                 },
                 {
                     type: "minLength[6]",
                     prompt: "حداقل باید ۶ کاراکتر باشد"
                 }
               ]
           },
           itemSku: {
               identifier: "itemSku",
               rules: [
                 {
                     type: "empty",
                     prompt: "این فیلد اجباری میباشد"
                 },
                 {
                     type: "minLength[8]",
                     prompt: "حداقل باید 8 کاراکتر باشد"
                 }
               ]
           },
           itemPrice: {
               identifier: "itemPrice",
               rules: [
                 {
                     type: "empty",
                     prompt: "این فیلد اجباری میباشد"
                 }
               ]
           }
       }
   });

});