import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: '따닥 위키',
  description: '따닥 기획·정책 라이브 위키 (WEB 1팀)',
  base: '/ttadak-wiki/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/ttadak-wiki/favicon.svg' }],
    ['link', { rel: 'stylesheet', crossorigin: '', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css' }],
  ],
  themeConfig: {
    nav: [
      { text: '위키 읽는 법', link: '/guide/how-to-read' },
      { text: '서비스', link: '/product/overview' },
      { text: '정책서', link: '/policy/upload' },
      { text: '화면 설계서', link: '/screens/upload' },
      { text: '결정 기록', link: '/decisions/' },
    ],
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '위키 읽는 법', link: '/guide/how-to-read' },
          { text: '갱신 기록', link: '/guide/changelog' },
          { text: '화면 설계 기준', link: '/guide/wireframe-standard' },
        ],
      },
      {
        text: '서비스',
        items: [
          { text: '서비스 개요', link: '/product/overview' },
          { text: '문제 정의·페르소나', link: '/product/problem' },
          { text: '세부 경험 결정 원칙', link: '/product/principles' },
          { text: '전체 흐름·화면 목록', link: '/product/flow' },
        ],
      },
      {
        text: '정책서',
        items: [
          { text: 'UPL 자료 업로드', link: '/policy/upload' },
          { text: 'SEC 회차 구분', link: '/policy/session-split' },
          { text: 'TRN 필사', link: '/policy/transcription' },
          { text: 'QIZ 퀴즈', link: '/policy/quiz' },
          { text: 'ACC 계정·설정', link: '/policy/account' },
        ],
      },
      {
        text: '화면 설계서',
        items: [
          { text: '자료 업로드', link: '/screens/upload' },
          { text: '회차 구분', link: '/screens/session-split' },
          { text: '필사', link: '/screens/transcription' },
          { text: '퀴즈', link: '/screens/quiz' },
          { text: '계정·설정', link: '/screens/account' },
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
