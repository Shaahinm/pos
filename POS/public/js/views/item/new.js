define(["jquery", "iteminit", "semantic", "jqueryvalidate", "domready!"], function ($, iteminit) {

    // semantic init
    $(".accordion").accordion();
    $(".ui.dropdown").dropdown();
    $("#itemTag").dropdown({
        allowAdditions: true,
        maxSelections: 5,
        apiSettings: {
            url: "http://ieisys.com:12220/api/tag/{query}"
        }
    });
    // end of semantic init

    $.each($(".ajax-caller"), function (key, value) {
        iteminit.initAjax(value);
    });

    iteminit.priceSectionUiInit();

    $("#btnSave").on("click", function (e) {
        e.preventDefault();
        //$("#CreateItemForm").form("submit");
        var toSend = {
            itemName: $("#itemName").val(),
            itemSku: $("#itemSku").val(),
            itemTag: $("#itemTag").dropdown("get value").split(","),
            itemDepartment: $("#itemDepartment").dropdown("get value"),
            itemCategory: $("#itemCategory").dropdown("get value"),
            priceType: $("#priceType").dropdown("get value"),
            cost: $("#cost").val(),
            taxType: $("#taxType").dropdown("get value"),
            price: $("#price").val()
        };
        
        
        console.log(JSON.stringify(toSend));
        $.ajax({
            url: "http://ieisys.com:12220/api/item",
            method: "POST",
            data: JSON.stringify(toSend),
            contentType: "application/json",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                console.log(data.item._id);
                location.replace("/item/edit/" + data.item._id);
                //console.log(data);
            }
        }).fail(function (data) {
            alert(data);
        }).always(function () {

        });

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