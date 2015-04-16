var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		watch = require('gulp-watch');

gulp.task('styles', function(){
	gulp.src('assets/shared/styles/*.styl')
		.pipe(stylus({
			compress: true
			}))
		.pipe(gulp.dest('app/theme/stylesheets'));
});

gulp.task('default', ['styles']);