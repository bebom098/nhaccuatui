var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var sass = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var pipeline = require('readable-stream').pipeline;
var uglify = require('gulp-uglify');
//style paths
var scssFiles = 'src/scss/*.scss'
var pugFiles = 'src/**/*.pug'
var cssDest = 'dest/css';
var pugDest = 'dest/';
var jsFiles = 'src/js/*.js'
var jsDest = 'dest/js/';

gulp.task('compress', function () {
    return pipeline(
          gulp.src(jsFiles),
          uglify(),
          gulp.dest(jsDest)
    );
  });


gulp.task('pug', function () {
    return gulp.src(pugFiles).pipe(plumber())
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest(pugDest));
});


gulp.task('sass', function () {
    return gulp.src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});



gulp.task('sass:watch', function () {
    gulp.watch(scssFiles, ['sass']);
});

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: './dest/'
        }
    });
    gulp.watch(['dest/*.html'], reload);
    gulp.watch(['dest/js/*.js'], reload);
    gulp.watch(['dest/css/*.css'], reload);
    gulp.watch(pugFiles, ['pug'], reload);
    gulp.watch(scssFiles, ['sass'], reload);
    gulp.watch(jsFiles, ['compress'], reload);

});