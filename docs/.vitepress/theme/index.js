import theme from 'vitepress/dist/client/theme-default'
import '../../../theme/styles/index.css'
import { registerComponents } from './register-components'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import XwComponets from '../../../src/main.js';
export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(XwComponets)
    registerComponents(app)
  }
}
