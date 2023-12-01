"use strict";

var _hello = _interopRequireDefault(require("./hello"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function main() {
  var args = process.argv;
  if (args[2] && args[2] === "--v") {
    console.log("Es6CliSkeleton - version 1.0.0");
  } else {
    console.log(_hello["default"]);
  }
}
main();