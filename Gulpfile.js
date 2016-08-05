// Gulp
var gulp = require('gulp');

// Gulp plugins
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var fileinclude = require('gulp-file-include');


// SVG
svgmin = require('gulp-svgmin');
svgstore = require('gulp-svgstore');
rsp = require('remove-svg-properties').stream;


// BrowserSync
var browserSync = require('browser-sync').create();

// Post CSS Plugins
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


// Post CSS Processors
var processors = [
	autoprefixer({browsers: ['last 6 version']}),
	cssnano({ zindex: false })
];


// scss task
gulp.task('scss', function() {
	gulp.src('app/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('scss:build', function() {
	gulp.src('app/scss/main.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('dist/css'))
});

// SVG task
gulp.task('svg', function() {

	gulp.src('app/icons/*.svg')
		.pipe(rsp.remove({
			properties: [rsp.PROPS_FILL]
		}))
		.pipe(svgmin())
		.pipe(svgstore({ inlineSvg: true }))
		.pipe(gulp.dest('dist/images'));

});


// JS
gulp.task('js', function() {

	gulp.src('app/js/partials/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));

});


gulp.task('js:plugins', function() {
	gulp.src('app/js/plugins/*.js')
		.pipe(concat('plugins.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
	gulp.src('app/*.html')
		.pipe(fileinclude({ basepath : 'app/partials' }))
		.pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
	gulp.src('app/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
	gulp.src('app/images/*')
		.pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['html', 'scss:build', 'js', 'js:plugins', 'svg', 'fonts', 'images']);


gulp.task('default', ['html', 'scss', 'js', 'js:plugins', 'svg', 'fonts', 'images'], function() {
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/js/partials/*.js', ['js']).on('change', browserSync.reload);
	gulp.watch('app/js/plugins/*.js', ['js:plugins']).on('change', browserSync.reload);
	gulp.watch('app/icons/*.svg', ['svg']).on('change', browserSync.reload);
	gulp.watch('app/**/*.html', ['html']).on('change', browserSync.reload);
	gulp.watch('app/images/*.*', ['images']);

	browserSync.init({
		server: {
			baseDir: "./dist"
		},
		browser : 'google chrome'
	});
});