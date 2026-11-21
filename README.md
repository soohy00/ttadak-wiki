# 따닥 위키

따닥(DDD 14기 WEB 1팀)의 기획·정책 라이브 위키입니다. 개발과 디자인은 이 위키를 기준으로 진행합니다.

- 사이트: https://soohy00.github.io/ttadak-wiki/
- 같은 내용을 **개발자용**(텍스트)과 **디자이너용**(와이어프레임·화면 설계서)으로 보여 줍니다. 페이지 위의 "보기" 버튼으로 바꿉니다.

## 쓰는 법

- 페이지는 `docs/` 아래 Markdown 파일입니다.
- 개발자용 내용은 `::: dev` … `:::`, 디자이너용 내용은 `::: design` … `:::` 안에 씁니다. 둘 다 밖에 쓴 내용은 두 보기에 모두 나옵니다.
- 상태 표시는 `<Status type="확정" />`, `<Status type="초안" />`, `<Status type="미결정" />`을 씁니다.
- 내용을 바꾸면 `docs/guide/changelog.md`에 한 줄을 남깁니다.

## 로컬에서 보기

```bash
npm install
npm run dev
```

`main`에 올리면 GitHub Actions가 GitHub Pages로 배포합니다.

## 라이선스

- 글꼴: Paperlogy, SIL Open Font License 1.1 (`docs/public/fonts/OFL.txt`)
