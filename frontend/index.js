"use strict";

const dockerAdapter = require("./config/docker-adapter"),
      dockerOptions = require("./config/docker-options");

let instruction = process.argv.slice(2)[0];
console.log(instruction)
//dockerAdapter.run(dockerOptions[instruction], "gulp " + instruction);
