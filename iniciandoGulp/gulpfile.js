const { src, dest } = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("dart-sass");

function compilarSASS() {
    return src("./src/scss/app.scss").pipe(sass()).pipe(dest("./build/css"));
}

exports.compilarSASS = compilarSASS;