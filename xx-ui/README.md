## 组件库开发流程

## 目录
--examples 本地预览组件，和正常开发页面一样
--lib 打包出来的组件库，因为要和按需加载的插件配合，所以叫这个名字
--packages 所有组件库的js文件
--src 所有基础样式和组件样式，统一组件导出入口
--test 组件单测

## 注意
- 用了 babel-plugin-component 则不能引全量，否则会报错，找不到全量的 css 文件，因为目录不对，ui/lib/styles/xx.css
- 发包要用官方源登入，并且是 https