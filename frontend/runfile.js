"use strict";

const runjs         = require("runjs"),
      dockerAdapter = require("./config/docker-adapter"),
      dockerOptions = require("./config/docker-options");

var deploy = exports.default = {
  js: function js() {
    runjs.run(dockerAdapter.bash(dockerOptions["js"], "gulp js"));
  },
  css: function css() {
    runjs.run(dockerAdapter.bash(dockerOptions["css"], "gulp css"));
  },
  html: function html() {
    runjs.run(dockerAdapter.bash(dockerOptions["html"], "gulp html"));
  },
  all: function all() {
    deploy.js();
    deploy.css();
    deploy.html();
  }
};
