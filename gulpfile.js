const gulp = require('gulp'),
browserSync = require('browser-sync'),
pug = require('gulp-pug'),
notify = require("gulp-notify"),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
babel = require('gulp-babel'),
uglify = require('gulp-uglify');

gulp.task('browser-sync', () => {
	browserSync({
		server: {baseDir: 'app'},
		notify: false
	});
});

gulp.task('pug', () => {
	return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
		.pipe(pug({pretty: '\t'}))
		.on("error", notify.onError())
		.pipe(gulp.dest('app'));
});

gulp.task('sass', () => {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sass().on("error", notify.onError()))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('babel', () =>
    gulp.src('src/js/common.js')
        .pipe(babel({
            presets: ['@babel/env']
		}))
		.pipe(uglify())
        .pipe(gulp.dest('app/js'))
);

gulp.task('watch', ['pug','sass','babel','browser-sync'], () => {
	gulp.watch('src/pug/**/*.pug', ['pug']);
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/js/**/*.js', ['babel']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);