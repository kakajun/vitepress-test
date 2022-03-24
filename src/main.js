import Cascader from './Cascader/index.js'
function install(app) {
  const packages = [Cascader]
  packages.forEach(item => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}
export { Cascader }

export default {
  install
}
