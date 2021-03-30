"use strict";

//SVG STORE
const gulp = require("gulp"),
  path = require("path"),
  fs = require("fs"),
  svgmin = require("gulp-svgmin"),
  rename = require("gulp-rename"),
  inject = require("gulp-inject"),
  rev = require("gulp-rev"),
  svgstore = require("gulp-svgstore");

gulp.task("svg", () => {
  const svgs = gulp
    .src("./src/assets/themes/images/icons/*.svg")
    .pipe(svgmin(function (file) {
      const prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [
          {
            removeTitle: true
          },
          {
            removeAttrs: {
              attrs: "stroke"
            }
          },
          {
            removeStyleElement: true
          },
          {
            cleanupIDs: {
              prefix: prefix + "-",
              minify: true
            }
          }
        ]
      };
    }))
    .pipe(rename({prefix: "icon-"}))
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src("./src/index.html")
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest("src"));
});


// LESS
gulp.task("less", () =>
  gulp.src("./dist/*.css")
    .pipe(rev())
    .pipe(rev.manifest())
    .pipe(gulp.dest("dist/assets")));

gulp.task("less:hash", () => {
  const hash = getFileHash("./dist/");
  return gulp.src("./dist/*.css")
    .pipe(rename({suffix: `.${hash}`}))
    .pipe(gulp.dest("./dist"));
});

gulp.task("less:inject", () => {
  const target = gulp.src("./dist/index.html"),
    src = gulp.src("./dist/custom.*.css", {read: false});

  function fileContents(filePath, file) {
    return `<link id="uxCurrentLinkStylesheetID" rel="stylesheet" href="./${filePath.split("/dist/")[1]}">`;
  }

  return target
    .pipe(inject(src, {transform: fileContents}), {relative: false})
    .pipe(gulp.dest("dist"));
});

function getFileHash(dir) {
  const fileName = fs.readdirSync(dir)
    .filter((file) => file.includes("runtime"))[0];
  return fileName.split(".")[1];
}
