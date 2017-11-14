var tape = require("tape"),
    minimap = require("../");

tape("minimap() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(minimap.minimap(), 42);
  test.end();
});
