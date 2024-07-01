const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);