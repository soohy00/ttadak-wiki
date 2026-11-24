import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Status from './Status.vue'
import Comments from './Comments.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Comments),
    })
  },
  enhanceApp({ app }) {
    app.component('Status', Status)
  },
}
