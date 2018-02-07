var gulp = require('gulp');
var sass = require('gulp-sass');
// var connect = require('gulp-connect');

// gulp.task('connect', function(){
//   connect.server({
//     root: '.',
//     livereload: true
//   });
// });

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./stylesheets/sass/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./stylesheets'));
});

// gulp.task('livereload', function (){
//   gulp.src('./stylesheets/**/*')
//     .pipe(connect.reload());
// });

gulp.task('watch', function () {
  gulp.watch('./stylesheets/sass/**/*.scss', ['sass']);
  // gulp.watch('./stylesheets/**/*', ['livereload']);
});

gulp.task('default', ['watch', 'sass']);
