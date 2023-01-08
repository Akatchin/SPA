const gulp = require('gulp')
const ugiflycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function depsCSS() {
    return gulp.src("node_modules/font-awesome/css/font-awesome.css")
        .pipe(ugiflycss({"ugglyComments": false}))
        .pipe(concat("deps.min.css"))
        .pipe(gulp.dest("build/assets/css"))
}

function depsFonts(cb) {
    return gulp.src("node_modules/font-awesome/fonts/*.*")
        .pipe(gulp.dest("build/assets/fonts"))
}

module.exports = {
    depsCSS,
    depsFonts
}