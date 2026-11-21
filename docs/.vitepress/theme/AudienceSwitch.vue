<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Which view is shown: developers read text, designers read wireframes and screen specs.
// Kept in ?view= and localStorage so a shared link opens the same view.
const props = defineProps<{ inline?: boolean }>()
type View = 'dev' | 'design'
const view = ref<View>('dev')
const KEY = 'ttadak-wiki-view'

function apply(v: View) {
  view.value = v
  document.documentElement.dataset.audience = v
  try { localStorage.setItem(KEY, v) } catch {}
  const url = new URL(window.location.href)
  url.searchParams.set('view', v)
  window.history.replaceState(window.history.state, '', url)
}

onMounted(() => {
  const fromUrl = new URL(window.location.href).searchParams.get('view')
  let saved: string | null = null
  try { saved = localStorage.getItem(KEY) } catch {}
  const v = (fromUrl || saved) === 'design' ? 'design' : 'dev'
  view.value = v
  document.documentElement.dataset.audience = v
})
</script>

<template>
  <div :class="['audience-switch', { inline: props.inline }]" role="group" aria-label="보기 전환">
    <span v-if="props.inline" class="audience-switch-title">보기</span>
    <button type="button" :aria-pressed="view === 'dev'" @click="apply('dev')">개발자용</button>
    <button type="button" :aria-pressed="view === 'design'" @click="apply('design')">디자이너용</button>
  </div>
</template>
