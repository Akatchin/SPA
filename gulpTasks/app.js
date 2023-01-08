const gulp = require("gulp")
const babel = require("gulp-babel")
const ugliflycss = require("gulp-uglifycss")
const uglify = require("gulp-uglify")
const sass = require("gulp-sass")(require("sass"))
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")

function appHtml(){
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("build"))
}

function appCSS(){
    return gulp.src("src/assets/sass/index.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(ugliflycss({"uglyComments": true}))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest("build/assets/css"))

}

function appJS(){
    return gulp.src("src/assets/js/**/*.js")
        .pipe(babel({presets: ["env"]}))
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("build/assets/js"))
}

function appIMG(){
    return gulp.src("src/assets/imgs/**/*.*")
        .pipe(gulp.dest("build/assets/imgs"))
}

gulp.task("appHTML", appHtml)
gulp.task("appCSS", appCSS)
gulp.task("appJS", appJS)
gulp.task("appIMG", appIMG)

module.exports = {
    appHtml,
    appCSS,
    appJS,
    appIMG
}