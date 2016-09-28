require(["jquery", "iteminit", "jqueryvalidate", "semantic", "domready!"], function ($, iteminit) {

    // semantic init
    $(".accordion").accordion();
    $(".ui.dropdown").dropdown();
    $(".menu .item").tab();
    $(".ui.checkbox").checkbox();

  
    var radioName = 0;

    $("#itemTag").dropdown({
        allowAdditions: true,
        maxSelections: 5,
        apiSettings: {
            url: "http://ieisys.com:12220/api/tag/{query}"
        }
    });
    $("#itemTag").dropdown("refresh");

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

    $("#btnSave").on("click", function (e) {

        e.preventDefault();
        ////$("#CreateItemForm").form("submit");
        //var toSend = {
        //    itemname: $("#itemName").val(),
        //    itemsku: $("#itemSku").val(),
        //    itemtag: $("#itemTag").dropdown("get value"),
        //    itemdepartment: $("#itemDepartment").dropdown("get value"),
        //    itemcategory: $("#itemCategory").dropdown("get value")
        //};



        //$.ajax({
        //    url: "http://ieisys.com:12220/api/item",
        //    method: "POST",
        //    data: toSend,
        //    timeout: 10000
        //}).done(function (data) {
        //    if (data) {
        //        location.replace("/item/new/jhsadjksahdkjsahkjsa");
        //    }
        //}).fail(function (data) {
        //    alert(data);
        //}).always(function () {

        //});
        //console.log(toSend);

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