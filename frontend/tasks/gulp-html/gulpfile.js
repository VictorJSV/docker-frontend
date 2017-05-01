const gulp            = require("gulp"),
      pug             = require("gulp-pug"),
      puglint         = require("gulp-pug-lint"),
      pugInheritance  = require("pug-inheritance"),
      rename          = require("gulp-rename"),
      pathFiles 	    = require("../../config/docker-path.js"),
      functions       = require("../../config/functions.js");

gulp.task("html", function(){
  return gulp.src(pathFiles.input.views + "/**/*.pug", { base : pathFiles.input.views })
    .pipe(puglint())
    .pipe(pug({ pretty: !functions.isProduction() }))
    //.pipe(rename({ extname: ".phtml" }))
    .pipe(gulp.dest(pathFiles.output.html));
});
