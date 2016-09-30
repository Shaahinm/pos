requirejs.config({
    baseUrl: "/public/js",
    paths: {
        jquery: "libs/jquery-3.1.0",
        semantic: "libs/semantic",
        domready: "libs/domready",
        jqueryvalidate: "libs/jquery.validate",
        iteminit: "common/itemPagesInit",
        modals: "common/modals"
    },
    shim: {
        "semantic": ["jquery"],
        "jqueryvalidate": ["jquery"],
        "modals": ["jquery", "semantic"]
    },
    urlArgs: "bust=" + (new Date()).getTime()
});
