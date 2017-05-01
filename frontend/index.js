"use strict";

const dockerAdapter = require("./config/docker-adapter"),
      dockerOptions = require("./config/docker-options");

let instruction = process.argv.slice(2)[0];
switch (instruction) {
  case "css":
    dockerAdapter.run(dockerOptions["css"], "gulp css");
    break;
  case "html":
    dockerAdapter.run(dockerOptions["html"], "gulp html");
    break;
  case "js":
    dockerAdapter.run(dockerOptions["js"], "gulp js");
    break;
  default:

}
