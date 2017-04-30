"use strict";

let Path = {
  server: "",
  base  : {},
  config: {},
  tasks : {},
  input : {},
  output: {}
};

//-----------------------------------------------------------------------
Path.base.docker   = "/usr/local/app";
Path.base.project  = "$(pwd)/..";
//-----------------------------------------------------------------------
Path.config.docker = Path.base.docker + "/frontend/config";
Path.tasks.docker  = Path.base.docker + "/frontend/tasks";
Path.input.docker  = Path.base.docker + "/frontend/source";
Path.output.docker = Path.base.docker + "/public";
//-----------------------------------------------------------------------
Path.input.styles  = Path.input.docker + "/styles";
Path.input.scripts = Path.input.docker + "/scripts";
Path.input.views   = Path.input.docker + "/views";
Path.input.fonts   = Path.input.docker + "/fonts";
Path.input.img     = Path.input.docker + "/img";
Path.input.icons   = Path.input.docker + "/icons";
//-----------------------------------------------------------------------
Path.output.css    = Path.output.docker + "/css";
Path.output.js     = Path.output.docker + "/js";
Path.output.fonts  = Path.output.docker + "/fonts";
Path.output.img    = Path.output.docker + "/img";
Path.output.html   = Path.base.docker;
//-----------------------------------------------------------------------
module.exports = Path;
