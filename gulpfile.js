const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
var insert = require('gulp-insert');
const clean = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

const cssFiles = [
    './static/lib/css/*.css',
    './blocks/**/*.scss'     
]

const jsFiles = [
    './static/lib/js/jquery.min.js',
    './static/lib/js/gsap.min.js',
    './static/lib/js/ScrollTrigger.min.js',
    './static/lib/js/jquery.formstyler.min.js',
    './static/lib/js/jquery-ui.min.js',
    './static/lib/js/jquery.scrollbar.min.js',
    './blocks/**/*.js'
]

gulp.task('styles', function() {
    return gulp.src(cssFiles)
    .pipe(sourcemaps.init())  
    .pipe(insert.prepend('@import "./mixins/mixins.scss";'))  
    .pipe(bulk())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(clean({
        level: 2
    }))    
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./')) 
    .pipe(sourcemaps.write('./'))
    .pipe(browserSync.stream());
})

gulp.task('scripts', function() {
    return gulp.src(jsFiles)  
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./')) 
    .pipe(browserSync.stream());
})

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./blocks/**/*.scss', gulp.parallel('styles'));
    gulp.watch('./mixins/mixins.scss', gulp.parallel('styles'));
    gulp.watch('./blocks/**/*.js', gulp.parallel('scripts'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});