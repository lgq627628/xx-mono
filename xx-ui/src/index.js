import * as Components from '../packages'
export * from '../packages'

console.log(Components)

const install = (_vue) => {
    Object.keys(Components).forEach(key => {
        _vue.use(Components[key])
    })
};
export default {
    install,
    version: require('../package.json').version,
    name: require('../package.json').name,
    ...Components
}