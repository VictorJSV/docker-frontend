const gulp         = require("gulp"),
      stylus       = require("gulp-stylus"),
      urlVersion   = require("gulp-css-url-versioner"),
      pathFiles    = require("../../config/docker-path.js");

gulp.task("css", function () {
  return gulp.src(pathFiles.input.styles + "/**/*.styl")
    .pipe(stylus())
    .pipe(urlVersion({lastcommit: true}))
    .pipe(gulp.dest(pathFiles.output.css));
});
