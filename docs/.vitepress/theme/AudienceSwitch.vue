<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// Developer view (text) and designer view (wireframes, screen specs) of the same page.
// Shown only on pages with `views: true` in frontmatter. Kept in ?view= and localStorage.
type View = 'dev' | 'design'
const { frontmatter } = useData()
const route = useRoute()
const view = ref<View>('dev')
const KEY = 'ttadak-wiki-view'

function sync() {
  document.documentElement.dataset.audience = view.value
  document.documentElement.classList.toggle('has-views', !!frontmatter.value.views)
}

function apply(v: View) {
  view.value = v
  sync()
  try { localStorage.setItem(KEY, v) } catch {}
  const url = new URL(window.location.href)
  url.searchParams.set('view', v)
  window.history.replaceState(window.history.state, '', url)
}

onMounted(() => {
  const fromUrl = new URL(window.location.href).searchParams.get('view')
  let saved: string | null = null
  try { saved = localStorage.getItem(KEY) } catch {}
  view.value = (fromUrl || saved) === 'design' ? 'design' : 'dev'
  sync()
})

watch(() => route.path, () => nextTick(sync))
</script>

<template>
  <div v-if="frontmatter.views" class="audience-switch" role="group" aria-label="보기 전환">
    <button type="button" :aria-pressed="view === 'dev'" @click="apply('dev')">개발자용</button>
    <button type="button" :aria-pressed="view === 'design'" @click="apply('design')">디자이너용</button>
  </div>
</template>
