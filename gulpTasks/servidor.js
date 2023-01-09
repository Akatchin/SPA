const gulp = require("gulp")
const webserver =  require("gulp-webserver")
const watch = require("gulp-watch") //O watch monitora mudanças nos arquivos do servidor

function monitorarArquivos(cb){
    watch("src/**/*.html", () => gulp.series("appHTML"))
    watch("src/**/*.scss", () => gulp.series("appCSS"))
    watch("src/**/*.js", () => gulp.series("appJS"))
    watch("src/assets/imgs/**/*.*", () => gulp.series("appIMG"))

    return cb()
}

function servidor(cb) {
    return gulp.src("build")
        .pipe(webserver({
            
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}