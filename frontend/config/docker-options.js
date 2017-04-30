"use strict";

/**
 * Se enlaza la tarea (carpeta) con su imagen correspondiente en docker
 */

let Options = {
  "css": {
    folder: "gulp-css",
    image : "micro-css"
  },
  "html": {
    folder: "gulp-html",
    image : "micro-html"
  },
  "js": {
    folder: "gulp-js",
    image : "micro-js"
  }
};
module.exports = Options;
