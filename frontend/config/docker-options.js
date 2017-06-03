"use strict";

/**
 * Se enlaza la tarea (carpeta) con su imagen correspondiente en docker
 */

let Options = {
  "css": {
    folder: "gulp-css",
    image : "victorjsv/micro-css"
  },
  "html": {
    folder: "gulp-html",
    image : "victorjsv/micro-html"
  },
  "js": {
    folder: "gulp-js",
    image : "victorjsv/micro-js"
  }
};
module.exports = Options;
