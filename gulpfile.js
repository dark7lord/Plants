import gulp from 'gulp';
import babel from 'gulp-babel';
import sync from 'browser-sync';
import sourcemap from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
const sass = gulpSass(dartSass);

// HTML

const dist = 'plants';
const src = 'source'

export const html = () => {
  return gulp.src(`${src}/*.html`)
    .pipe(gulp.dest(dist))
    .pipe(sync.stream());
};

// Styles

export const styles = () => {
  return gulp.src(`${src}/styles/sass/style.scss`)
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(`${dist}/css`))
    .pipe(sync.stream());
}

// Scripts

export const scripts = () => {
  return gulp.src(`${src}/scripts/*.js`)
    .pipe(concat('index.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest(dist))
    .pipe(sync.stream());
};

// Copy

export const copy = () => {
  return gulp.src([
    `${src}/fonts/**/*{woff,woff2}`,
    `${src}/images/**/*`,
    `${src}/images/**/*.svg`,
    `!${src}/images/icons/*.svg`,
    `!${src}/images/icon`
  ], {
    base: src
  })
    .pipe(gulp.dest(dist))
    .pipe(sync.stream({
      once: true
    }));
};

// SVG Sprite

export const sprite = () => {
  return gulp.src(`${src}/images/icons/*.svg`)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(`${dist}/images`));
}

// Server

export const server = () => {
  sync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: dist
    }
  });
};

// Watch

export const watch = () => {
  gulp.watch(`${src}/*.html`, gulp.series(html));
  gulp.watch(`${src}/styles/**/*.scss`, gulp.series(styles));
  gulp.watch(`${src}/scripts/**/*.js`, gulp.series(scripts));
  gulp.watch(`${src}/images/icons/*.svg`, gulp.series(sprite));
  gulp.watch([
    `${src}/fonts/**/*`,
    `${src}/images/**/*`,
  ], gulp.series(copy));
};

export const build = () => {
  gulp.parallel(
    html,
    styles,
    scripts,
    copy,
    sprite
  )
}

// Default

export default gulp.series(
  gulp.parallel(
    html,
    styles,
    scripts,
    copy,
    sprite
  ),
  gulp.parallel(
    watch,
    server,
  ),
);
