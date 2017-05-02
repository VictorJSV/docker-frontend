"use strict";

/**
 * Construye la sentencia a ejecutar para levantar la imagen
 * Ej.: docker run -t --rm --user $(id -u):$(id -g) -v $(pwd)/..:/usr/local/app -w /usr/local/app/frontend/tasks/gulp-js micro-js gulp js
 */

const dockerPath    = require("./docker-path"),
      child_process = require("child_process");

let dockerAdapter = function () {
  function Adapter(options, instruction) {
    this.paths        = JSON.parse(JSON.stringify(dockerPath));
    this.options      = options || {};
    this.instruction  = instruction || "gulp";
    this.paramsArgs   = this.getArguments();
    this.paramWatcher = this.getParamWatcher();
  }

  Adapter.prototype.getArguments = function() {
    let arr = process.argv.slice(2);
    let params = arr.filter(function(param) {
      return /--(.*)/.test(param)
    });
    return params.join(" ");
  };

  Adapter.prototype.getParamWatcher = function() {
    this.options.fileWatch = this.options.fileWatch || false;
    if (this.options.fileWatch) {
      return " -e COMPILE_FILE='" + this.options.fileWatch + "'";
    } else {
      return ""
    }
  };

  Adapter.prototype.generateCommand = function() {
    let command = [
      "docker run -t",
      " --rm",
      " --user $(id -u):$(id -g)",
      this.paramWatcher,
      " -v ", this.paths.base.project, ":", this.paths.base.docker,
      " -w ", [this.paths.tasks.docker, "/", this.options.folder].join(""),
      " ", [this.paths.server, this.options.image].join(""),
      " ", this.instruction,
      " ", this.paramsArgs].join("");
    return command;
  };

  Adapter.prototype.execute = function(cmd, cb){
    child_process.exec(cmd, function (error, stdout, stderr) {
      console.info(stdout);

      if (error) {
        console.info(error);
        if (cb) cb(error);
      } else {
        if (cb) cb();
      }
    });
  };

  return {
    bash: function(options, instruction){
      let adapter = new Adapter(options, instruction);
      return adapter.generateCommand();
    }
  };
};
module.exports = dockerAdapter();
