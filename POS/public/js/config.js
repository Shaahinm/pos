requirejs.config({
    baseUrl: "/public/js",
    paths: {
        jquery: "libs/jquery-3.1.0",
        semantic: "libs/semantic",
        domready: "libs/domready",
        jqueryvalidate: "libs/jquery.validate",
        iteminit: "common/itemPagesInit"
    },
    shim: {
        "semantic": ["jquery"],
        "jqueryvalidate" : ["jquery"]
    },
    urlArgs: "bust=" + (new Date()).getTime()
});
