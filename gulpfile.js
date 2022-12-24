import gulp from 'gulp';
import babel from 'gulp-babel';
import replace from 'gulp-replace';
import terser from 'gulp-terser';
import sync from 'browser-sync';
import sourcemap from 'gulp-sourcemaps';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// HTML

export const html = () => {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream());
};

// Styles

export const styles = () => {
  return gulp.src('src/styles/sass/style.scss')
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(sync.stream());
}

// Scripts

export const scripts = () => {
  return gulp.src('src/scripts/index.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser())
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream());
};

// Copy

export const copy = () => {
  return gulp.src([
    'src/fonts/**/*',
    'src/images/**/*',
  ], {
    base: 'src'
  })
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream({
      once: true
    }));
};

// Paths

export const paths = () => {
  return gulp.src('dist/*.html')
    .pipe(replace(
      /(<link rel="stylesheet" href=")styles\/(index.css">)/, '$1$2'
    ))
    .pipe(replace(
      /(<script src=")scripts\/(index.js">)/, '$1$2'
    ))
    .pipe(gulp.dest('dist'));
};

// Server

export const server = () => {
  sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
};

// Watch

export const watch = () => {
  gulp.watch('src/*.html', gulp.series(html, paths));
  gulp.watch('src/styles/**/*.scss', gulp.series(styles));
  gulp.watch('src/scripts/**/*.js', gulp.series(scripts));
  gulp.watch([
    'src/fonts/**/*',
    'src/images/**/*',
  ], gulp.series(copy));
};

// Default

export default gulp.series(
  gulp.parallel(
    html,
    styles,
    scripts,
    copy,
  ),
  paths,
  gulp.parallel(
    watch,
    server,
  ),
);
