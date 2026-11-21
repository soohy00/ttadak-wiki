import DefaultTheme from 'vitepress/theme'
import Status from './Status.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Status', Status)
  },
}
