// src：读取⽂件对象相当于entry
// dest：构建⽬标对象相当于output
// series：⽤于编排任务顺序
// 事实上只要安装 sass 包即可，但是 gulp 对应的插件都比较老了，没有更新，所以还是用旧的
const { src, dest, series } = require("gulp");
// 导⼊gulp的sass对象
var sass = require("gulp-sass")(require("sass"));
// 导⼊sassGlob对象
var sassGlob = require("gulp-sass-glob");
// 导⼊postcss对象
var postcss = require("gulp-postcss");
// 导⼊兼容性前缀对象
var autoprefixer = require("autoprefixer");
// 导⼊代码压缩对象
var cssnano = require("cssnano");
// 创建任务函数
function scss() {
  // 配置postcss的插件系统
  var plugins = [autoprefixer(), cssnano()];
  // 执⾏构建流
  return src("src/styles/*.scss")
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(dest("lib/styles"));
}
exports.default = series(scss);
