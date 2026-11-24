<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

// 페이지마다 맨 아래 댓글 창(Giscus). 댓글은 저장소 Discussions(Announcements)에 페이지 경로별로 쌓인다.
const { isDark, frontmatter } = useData()
const route = useRoute()
const box = ref<HTMLElement | null>(null)

const theme = () => (isDark.value ? 'dark_dimmed' : 'light')

function mount() {
  const el = box.value
  if (!el) return
  el.innerHTML = ''
  const s = document.createElement('script')
  s.src = 'https://giscus.app/client.js'
  s.async = true
  s.crossOrigin = 'anonymous'
  const attrs: Record<string, string> = {
    'data-repo': 'soohy00/ttadak-wiki',
    'data-repo-id': 'R_kgDOV2YdIw',
    'data-category': 'Announcements',
    'data-category-id': 'DIC_kwDOV2YdI84DL24m',
    'data-mapping': 'pathname',
    'data-strict': '1',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '0',
    'data-input-position': 'top',
    'data-theme': theme(),
    'data-lang': 'ko',
    'data-loading': 'lazy',
  }
  for (const k in attrs) s.setAttribute(k, attrs[k])
  el.appendChild(s)
}

onMounted(mount)
watch(() => route.path, () => nextTick(mount))
watch(isDark, () => {
  const f = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  f?.contentWindow?.postMessage({ giscus: { setConfig: { theme: theme() } } }, 'https://giscus.app')
})
</script>

<template>
  <section v-if="frontmatter.comments !== false" id="comments" class="wiki-comments">
    <h2 class="wiki-comments-title">댓글</h2>
    <p class="wiki-comments-sub">이 페이지에 대한 의견·질문을 남겨 주세요. GitHub 계정으로 로그인하면 쓸 수 있어요.</p>
    <div ref="box" class="wiki-comments-box"></div>
  </section>
</template>
