define(function() {
    function capitalize(str) {
        console.log("capitalize called");
        return str.toUpperCase();
    }

    return {
        capitalize: capitalize
    }
});