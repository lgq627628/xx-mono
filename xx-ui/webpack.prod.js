const path = require("path");
//引⼊vue-loader
const { VueLoaderPlugin } = require("vue-loader");
const terserJs = require("terser-webpack-plugin");

module.exports = {
  //   mode: "production",
  mode: "none",
//   devtool: "source-map",
  entry: {
    //⼊⼝⽂件需要将每个模块都单独打包，⽤于做极致的按需组件系统
    index: "./src/index.js",
    button: "./packages/button",
    container: "./packages/container",
    "index.min": "./src/index.js",
    "button.min": "./packages/button",
    "container.min": "./packages/container",
  },
  output: {
    //设置⽣成的⽂件名称
    filename: "[name].js",
    //设置构建的组件库放在组件库的lib⽂件夹中，必须是绝对路径
    path: path.resolve(__dirname, "lib"),
    library: {
      //声明组件库的全局对象名称为XUI
      name: "XUI",
      //声明当前的导出模块为umd模块保证在任何模块场景都可以顺利加载
      type: "umd",
    },
    //开启构建清理，清空输出的目录
    clean: true,
  },
  module: {
    rules: [
      {
        //编译vue⽂件⽣成js⽂件
        test: /\.vue$/,
        use: { loader: "vue-loader" },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new terserJs({
        test: /\.min\.js$/,
      }),
    ],
  },
  externals: ["vue"], //加⼊排除vue框架的代码，否则每个组件打包之后都会引入 vue
  //vue-loader插件
  plugins: [
    new VueLoaderPlugin(),
    // new miniCss({
    //   filename: "css/[name].css",
    // }),
  ],
};
