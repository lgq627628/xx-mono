import XButton from './Button.vue'

XButton.install = (_vue) => {
    _vue.component(XButton.name, XButton)
}

// 单独导出 Button 对象
export const Button = XButton;
// 导出默认模块
export default XButton;