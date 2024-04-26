const gulp = require('gulp');
const war = require('gulp-war');
const zip = require('gulp-zip');

gulp.task('war', function(callback) {
  gulp.src(['./dist/voluntrackApp/**']).pipe(war({
    welcom:'index.html',
    displayName: 'Voluntrack App',
  })).pipe(zip('voluntrackApp.war')).pipe(gulp.dest('./dist'));
  callback();
});
