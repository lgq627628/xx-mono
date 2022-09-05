import XContainer from './Container.vue'

XContainer.install = (_vue) => {
    _vue.component(XContainer.name, XContainer)
}

// 单独导出 Container 对象
export const Container = XContainer;
// 导出默认模块
export default XContainer;