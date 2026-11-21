import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'

// One source, two views: ::: dev ... ::: and ::: design ... ::: blocks.
// The view switch in the nav bar shows one of them (see theme/AudienceSwitch.vue).
function audienceBlock(md: any, name: 'dev' | 'design', label: string) {
  md.use(container, name, {
    render(tokens: any[], idx: number) {
      return tokens[idx].nesting === 1
        ? `<div class="audience audience-${name}"><p class="audience-label">${label}</p>\n`
        : '</div>\n'
    },
  })
}

export default defineConfig({
  lang: 'ko-KR',
  title: '따닥 위키',
  description: '따닥 기획·정책 라이브 위키 (WEB 1팀)',
  base: '/ttadak-wiki/',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/ttadak-wiki/favicon.svg' }]],
  markdown: {
    config(md) {
      audienceBlock(md, 'dev', '개발자용')
      audienceBlock(md, 'design', '디자이너용')
    },
  },
  themeConfig: {
    nav: [
      { text: '위키 읽는 법', link: '/guide/how-to-read' },
      { text: '서비스', link: '/product/overview' },
      { text: '기능', link: '/features/upload' },
      { text: '결정 기록', link: '/decisions/' },
    ],
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '위키 읽는 법', link: '/guide/how-to-read' },
          { text: '갱신 기록', link: '/guide/changelog' },
        ],
      },
      {
        text: '서비스',
        items: [
          { text: '서비스 개요', link: '/product/overview' },
          { text: '문제 정의·페르소나', link: '/product/problem' },
          { text: '세부 경험 결정 원칙', link: '/product/principles' },
        ],
      },
      {
        text: '기능 (1사이클)',
        items: [
          { text: '자료 업로드', link: '/features/upload' },
          { text: '회차 구분', link: '/features/session-split' },
          { text: '필사', link: '/features/transcription' },
          { text: '퀴즈', link: '/features/quiz' },
          { text: '계정·설정', link: '/features/account' },
        ],
      },
      {
        text: '결정 기록',
        items: [{ text: '회의별 결정', link: '/decisions/' }],
      },
    ],
    outline: { level: [2, 3], label: '이 페이지' },
    docFooter: { prev: '이전', next: '다음' },
    lastUpdated: { text: '마지막 수정' },
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/soohy00/ttadak-wiki' }],
    editLink: {
      pattern: 'https://github.com/soohy00/ttadak-wiki/edit/main/docs/:path',
      text: '이 페이지 고치기',
    },
  },
})
