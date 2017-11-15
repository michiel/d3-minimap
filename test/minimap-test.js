var d3 = require("d3");
var tape = require("tape");
var jsdom = require("jsdom").JSDOM;
var minimap = require("../");

tape("minimap and canvas are exported functions", function(test) {
    var document = new jsdom("<h1>hello</h1>");
    test.ok(typeof(minimap.minimap) === 'function');
    test.ok(typeof(minimap.canvas) === 'function');
    test.end();
});

