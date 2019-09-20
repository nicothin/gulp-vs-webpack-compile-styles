const { series, parallel, src, dest, watch, lastRun } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");

let postCssPlugins = [
  autoprefixer({grid: true}),
];

function compileSass() {
  return src('src/style.scss')
    .pipe(sass({includePaths: [__dirname+'/','node_modules']}))
    .pipe(postcss(postCssPlugins))
    .pipe(dest('dist-gulp/'));
}
exports.default = compileSass;
