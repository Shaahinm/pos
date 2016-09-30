define(["jquery", "semantic", "domready!"], function ($) {

    function departmentModal() {
        $("#btnQuickAddDepartment").on("click", function () {
            $("#quickAddDepartment")
                .modal({
                    blurring: true,
                    onApprove: function () {
                        var value = $("#departmentName").val();
                        if (value.trim() === "") {
                            alert("لطفآ نام دپارتمان را وارد نمایید");
                            return false;
                        } else {
                            addDepartment(value);
                        }
                    }
                })
                .modal("setting", "transition", "scale")
                .modal("show");
        });
    }

    function addDepartment(value) {
        var data = {
            name: value
        };
        
        $.ajax({
            url: "http://ieisys.com:12220/api/department",
            method: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                fillDepartmentAjax();
            }
        }).fail(function (data) {
            $("#pageLoader").removeClass("active");
        }).always(function () {
            $("#pageLoader").removeClass("active");
        });
    }

    function fillDepartmentAjax() {
        var root = $("#itemDepartment").find(".ajax-caller");
        root.parent().siblings().last().addClass("active");
        $.ajax({
            url: "http://ieisys.com:12220/api/department",
            method: "GET",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                root.empty();
                $.each(data.items, function (key, value) {
                    root.append($("<div>").attr("data-value", value._id).attr("class", "item").text(value.name));
                });
                root.parent().siblings().last().removeClass("active");
            }
        }).fail(function (data) {

        }).always(function () {

        });
    }

    function categoryModal() {
        $("#btnQuickAddCategory").on("click", function () {
            $("#quickAddCategory")
                .modal({
                    blurring: true,
                    onApprove: function () {
                        var value = $("#categoryName").val();
                        if (value.trim() === "") {
                            alert("لطفآ نام دسته بندی را وارد نمایید");
                        } else {
                            addCategory(value);
                        }
                    }
                })
                .modal("setting", "transition", "scale")
                .modal("show");
        });
    }

    function addCategory(value) {
        var data = {
            name: value
        };

        $.ajax({
            url: "http://ieisys.com:12220/api/category",
            method: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                fillCategoryAjax();
            }
        }).fail(function (data) {
            $("#pageLoader").removeClass("active");
        }).always(function () {
            $("#pageLoader").removeClass("active");
        });
    }

    function fillCategoryAjax() {
        var root = $("#itemCategory").find(".ajax-caller");
        root.parent().siblings().last().addClass("active");
        $.ajax({
            url: "http://ieisys.com:12220/api/category",
            method: "GET",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                root.empty();
                $.each(data.items, function (key, value) {
                    root.append($("<div>").attr("data-value", value._id).attr("class", "item").text(value.name));
                });
                root.parent().siblings().last().removeClass("active");
            }
        }).fail(function (data) {

        }).always(function () {

        });
    }

    function taxTypeModal() {
        $("#btnQuickAddTaxType").on("click", function () {
            $("#quickAddTaxType")
                .modal({
                    blurring: true,
                    onApprove: function () {
                        var value = $("#taxTypeName").val();
                        var percentage = $("#taxTypePercentage").val();
                        if ((value.trim() === "") || (percentage.trim() === "")) {
                            alert("لطفآ نام و یا درصد را وارد نمایید");
                            return false;
                        } else {
                            addTaxType(value, percentage);
                        }
                    }
                })
                .modal("setting", "transition", "scale")
                .modal("show");
        });
    }

    function addTaxType(value, percentage) {
        var data = {
            name: value,
            percentage: percentage
        };

        $.ajax({
            url: "http://ieisys.com:12220/api/tax",
            method: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                fillTaxTypeAjax();
            }
        }).fail(function (data) {
            //$("#pageLoader").removeClass("active");
        }).always(function () {
            //$("#pageLoader").removeClass("active");
        });
    }

    function fillTaxTypeAjax() {
        var root = $("#taxType").find(".ajax-caller");
        root.parent().siblings().last().addClass("active");
        $.ajax({
            url: "http://ieisys.com:12220/api/tax",
            method: "GET",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                root.empty();
                $.each(data.items, function (key, value) {
                    root.append($("<div>").attr("data-value", value._id).attr("class", "item").text(value.name));
                });
                root.parent().siblings().last().removeClass("active");
            }
        }).fail(function (data) {

        }).always(function () {

        });
    }

    function tagModal() {
        $("#btnQuickAddTag").on("click", function () {
            $("#quickAddTag")
                .modal({
                    blurring: true,
                    onApprove: function () {
                        var value = $("#tagName").val();
                        if (value.trim() === "") {
                            alert("لطفآ نام تگ را وارد نمایید");
                            return false;
                        } else {
                            addTag(value);
                        }
                    }
                })
                .modal("setting", "transition", "scale")
                .modal("show");
        });
    }

    function addTag(value) {
        var data = {
            name: value
        };

        $.ajax({
            url: "http://ieisys.com:12220/api/tag",
            method: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            timeout: 10000
        }).done(function (data) {
            if (data) {
                sessionStorage.clear();
            }
        }).fail(function (data) {
        }).always(function () {
        });
    }
    

    return {
        departmentModal: departmentModal,
        categoryModal: categoryModal,
        taxTypeModal: taxTypeModal,
        tagModal: tagModal
    }
});