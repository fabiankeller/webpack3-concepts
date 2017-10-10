(function () {
    "use strict";

    // include index.html for webpack to load
    require("./index.html");

    var Reveal = require("reveal.js");
    require("reveal.js/css/reveal.css");
    // uncomment theme you want to load below
    require("reveal.js/css/theme/white.css");


    Reveal.initialize({
        history: true,
        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: []
    });
})();
