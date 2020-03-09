const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
// const tinyPNG = require('gulp-tinypng-compress');
const tinify = require('gulp-tinify');


gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'));
  done();
}); 

gulp.task('imagemin', () => {
  return gulp.src('src/img/**/*.*')
    .pipe(tinify('8CwslrdFH37Xwp9p0LrLrJTN3NnDL94b'))
    .pipe(gulp.dest('dist/img/'))
});

gulp.task('move-js', function(done) {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js/'));
  done();
});

// gulp.task('move-svg', function (done) {
//   return gulp.src('./src/img/**/*.svg')
//     .pipe(gulp.dest('dist/img/'));
//   done();
// });

gulp.task('htmlmin', function(done) {
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist/'));
  done();
}); 

gulp.task('fonts', function(done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));
  done();
}); 

// gulp.task('tinyPNG', function (done) {
//   return gulp.src('./src/img/**/*.{png,jpg,jpeg}', {
//     dot: true,
//     ignore: '/**/*.svg'
//   })
//       .pipe(tinyPNG({
//           key: '8CwslrdFH37Xwp9p0LrLrJTN3NnDL94b',
//       }))
//       .pipe(gulp.dest('dist/img/'));
//       done();
// });

/* Включить сжатие изображений */
/* gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'fonts', 'imagemin', function (done){
  done();
})); */
/* Отключить сжатие изображений */
gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'fonts', function (done) {
  done();
}));

//exports.build = series('minify-css', 'move-js', 'htmlmin', 'fonts', 'tinyPNG');