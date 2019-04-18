var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');


// Сжимаем HTML
gulp.task('minify', function() {
  return gulp.src("src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
});


// Загружаем сервер, предварительно скомпилировав из SASS в CSS
gulp.task('serve', ['sass'], function() {
 bs.init({
   server: "./src"
  });
  gulp.watch("src/sass/*.sass", ['sass']); // отслеживаем изменения всех SASS в папке scr
  gulp.watch("src/*.html").on('change', bs.reload); // отслеживаем изменения всех html файлов в папке scr, обновляем странизу
});



// Компилируем файлы из SASS в CSS
gulp.task('sass', function() {
 return gulp.src("src/sass/*.sass")
  .pipe(sass())
  .pipe(autoprefixer({
   browsers: ['last 2 versions'],
   cascade: false
  }))
  .pipe(gulp.dest("src/css"))
  .pipe(bs.stream());
});

gulp.task('default', ['serve']);


