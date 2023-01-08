
const { series, parallel } = require("gulp")
const gulp = require("gulp")

const { appHtml, appCSS, appJS, appIMG } = require("./gulpTasks/app")
const { depsCSS, depsFonts } = require("./gulpTasks/deps")
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor")

const ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)