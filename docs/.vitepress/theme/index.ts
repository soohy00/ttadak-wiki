import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AudienceSwitch from './AudienceSwitch.vue'
import Status from './Status.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(AudienceSwitch),
    })
  },
  enhanceApp({ app }) {
    app.component('Status', Status)
  },
}
