# 필사 화면

<div class="doc-info">
<span>화면 ID: SCR-TRN</span>
<span>정책: <a href="../policy/transcription">TRN 필사 정책</a></span>
<span>와이어프레임: 1사이클 시안 (무채색, 2026-11-23). 빈칸·백지 입력 방식은 시안 투표 중</span>
</div>

## 사용자 흐름

1. 회차 목록에서 회차와 단계를 고른다. 하던 단계가 있으면 이어서 한다. (TRN-11·12)
2. 문장 1개씩 입력하고 Enter로 넘어간다. 오타가 있으면 넘어가지 않는다. (TRN-06·07·10)
3. 단계를 마치면 다음 단계를 권한다. 백지를 마치면 원문과 비교한다. (TRN-04·15)
4. 비교를 마치면 퀴즈로 이동한다. (QIZ)

- 와이어프레임은 배치와 상태만 정합니다. 색·글꼴·간격은 디자이너의 파운데이션을 따릅니다.
- 틀린 글자는 와이어프레임에서 물결 밑줄로 그렸습니다. 실제 화면에서는 빨간색입니다(TRN-07). 빨간색 값은 파운데이션의 오류 색을 씁니다.
- 화면 속 자료(한국사 요약노트)와 숫자는 예시입니다.

## SCR-TRN-01 회차 목록·진행 상황

<div class="wf">
  <div class="wf-bar"><b>따닥</b><span>내 자료</span><span class="sp"></span><span class="wf-dot"></span></div>
  <div class="wf-body">
    <p class="wf-h"><i class="wf-n">1</i>한국사_요약노트</p>
    <p class="wf-sub">4회차 · 12,400자 · 1회차 완료</p>
    <div class="wf-row"><span class="t">1회차 · 선사 시대와 고조선</span><span class="wf-btn sm ghost">다시 하기</span><span class="m"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip done">✓ 빈칸</span><span class="wf-chip done">✓ 백지</span></span></div>
    <div class="wf-row"><span class="t"><i class="wf-n">2</i>2회차 · 삼국의 성립과 발전</span><span class="wf-btn sm"><i class="wf-n">3</i>이어서 하기</span><span class="m"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip on">빈칸 3/18</span><span class="wf-chip">백지</span></span></div>
    <div class="wf-row"><span class="t">3회차 · 통일 신라와 발해</span><span class="wf-btn sm ghost">시작</span><span class="m"><span class="wf-chip">따라 쓰기</span><span class="wf-chip">빈칸</span><span class="wf-chip">백지</span><span class="wf-muted">약 28분</span></span></div>
    <div class="wf-row"><span class="t">4회차 · 고려의 정치와 사회</span><span class="wf-btn sm ghost">시작</span><span class="m"><span class="wf-chip">따라 쓰기</span><span class="wf-chip">빈칸</span><span class="wf-chip">백지</span><span class="wf-muted">약 27분</span></span></div>
  </div>
</div>
<p class="wf-cap">자료를 열면 처음 보는 화면. 단계 칩을 눌러 원하는 단계로 바로 갈 수 있습니다(TRN-11).</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 자료 이름·요약 | 회차 수, 글자 수, 완료한 회차 수 | — | SEC-13, TRN-05 |
| 2 | 회차 줄 | 회차 제목과 단계 칩 3개. 칩을 누르면 그 단계 시작 | 단계마다 시작 전 / 진행 중(문장 위치) / 완료 | TRN-05·11 |
| 3 | 회차 버튼 | 진행 중이면 '이어서 하기', 처음이면 '시작', 모두 끝났으면 '다시 하기' | 시작 / 이어서 하기 / 다시 하기 | TRN-11·12 |

## SCR-TRN-02 따라 쓰기

<div class="wf">
  <div class="wf-body">
    <div class="wf-top"><span>← <i class="wf-n">1</i>2회차 · 삼국의 성립과 발전</span><span class="sp"></span><span class="wf-chips"><i class="wf-n">2</i><span class="wf-chip on">따라 쓰기</span><span class="wf-chip">빈칸</span><span class="wf-chip">백지</span></span><span><i class="wf-n">3</i>3 / 18</span></div>
    <div class="wf-prog"><i style="width:17%"></i></div>
    <p class="wf-prev">삼국은 왕권을 강화하며 나라의 틀을 갖추었다.</p>
    <p class="wf-sent"><i class="wf-n">4</i>고구려는 졸본에서 건국하여 국내성으로 도읍을 옮겼다.</p>
    <div class="wf-typed"><i class="wf-n">5</i>고구려는 졸본에서 건국하여 국<span class="wf-x">대</span><span class="wf-caret"></span></div>
    <div class="wf-hint"><span><i class="wf-n">6</i>Enter 다음 문장 · Shift+Enter 이전 문장</span><span>오타가 있으면 넘어가지 않아요</span></div>
  </div>
</div>
<p class="wf-cap">입력 중 오타가 난 상태. '대'가 틀린 글자(실제 화면은 빨간색). 이 상태에서 Enter를 누르면 입력 칸이 좌우로 흔들립니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 회차 이름·뒤로 | ← 누르면 위치를 저장하고 회차 목록으로 | — | TRN-12, TRN-19 |
| 2 | 단계 칩 | 지금 단계 표시. 눌러서 다른 단계로 이동(확인 후) | 따라 쓰기 / 빈칸 / 백지 | TRN-02·11 |
| 3 | 문장 위치·진행 막대 | 지금 문장 / 전체 문장 | — | TRN-06 |
| 4 | 원문 문장 | 지금 문장 1개를 크게. 위에 앞 문장을 흐리게 | — | TRN-06·08 |
| 5 | 입력 칸 | 화면에 들어오면 바로 입력 가능(따로 누르지 않음). 틀린 글자 표시 | 입력 전 / 입력 중 / 오타 / 일치 | TRN-07·09 |
| 6 | 키 안내 | Enter 다음, Shift+Enter 이전 | — | TRN-10 |

## SCR-TRN-03 빈칸 입력 시안

보편 패턴이 없어 시안 3개를 두고 투표로 정합니다(TRN-16). 빈칸은 어절 단위입니다(TRN-03).

### 시안 A · 빈칸 자리에 바로 입력

<div class="wf">
  <div class="wf-body">
    <div class="wf-top"><span>← 2회차 · 삼국의 성립과 발전</span><span class="sp"></span><span class="wf-chips"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip on">빈칸</span><span class="wf-chip">백지</span></span><span>3 / 18</span></div>
    <div class="wf-prog"><i style="width:17%"></i></div>
    <p class="wf-sent">고구려는 <span class="wf-blank">졸본에서</span> 건국하여 <span class="wf-blank on"><i class="wf-n">1</i>국내<span class="wf-caret"></span></span> 도읍을 옮겼다.</p>
    <div class="wf-hint"><span><i class="wf-n">2</i>Space·Tab 다음 빈칸 · Enter 다음 문장</span><span>빈칸 2개 중 1개 완료</span></div>
  </div>
</div>
<p class="wf-cap">문장 안의 빈칸에 커서가 들어가 바로 입력합니다. 빈칸 하나를 맞히면 다음 빈칸으로 넘어갑니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 빈칸 | 지금 빈칸에 입력. 틀린 글자 표시 | 비어 있음 / 입력 중 / 오타 / 맞음 | TRN-03·07·09 |
| 2 | 키 안내 | Space·Tab 다음 빈칸, 모든 빈칸을 맞히면 Enter로 다음 문장 | — | TRN-10 |

### 시안 B · 아래 칸에 빈칸 단어만 입력

<div class="wf">
  <div class="wf-body">
    <div class="wf-top"><span>← 2회차 · 삼국의 성립과 발전</span><span class="sp"></span><span class="wf-chips"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip on">빈칸</span><span class="wf-chip">백지</span></span><span>3 / 18</span></div>
    <div class="wf-prog"><i style="width:17%"></i></div>
    <p class="wf-sent">고구려는 <span class="wf-blank">졸본에서</span> 건국하여 <span class="wf-blank on empty"><i class="wf-n">1</i>____</span> 도읍을 옮겼다.</p>
    <div class="wf-typed"><i class="wf-n">2</i>국내<span class="wf-caret"></span></div>
    <div class="wf-hint"><span>Enter 빈칸 확인 → 다음 빈칸</span><span>빈칸 2 / 2</span></div>
  </div>
</div>
<p class="wf-cap">문장은 그대로 두고, 진하게 표시된 빈칸에 들어갈 어절만 아래 칸에 입력합니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 지금 빈칸 | 입력할 빈칸을 진하게 표시. 맞히면 글자가 채워짐 | 대기 / 지금 / 맞음 | TRN-03 |
| 2 | 입력 칸 | 빈칸 어절만 입력, Enter로 확인 | 입력 중 / 오타 / 맞음 | TRN-07·09·10 |

### 시안 C · 문장 전체를 다시 입력

<div class="wf">
  <div class="wf-body">
    <div class="wf-top"><span>← 2회차 · 삼국의 성립과 발전</span><span class="sp"></span><span class="wf-chips"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip on">빈칸</span><span class="wf-chip">백지</span></span><span>3 / 18</span></div>
    <div class="wf-prog"><i style="width:17%"></i></div>
    <p class="wf-sent">고구려는 <span class="wf-blank empty">____</span> 건국하여 <span class="wf-blank empty">____</span> 도읍을 옮겼다.</p>
    <div class="wf-typed"><i class="wf-n">1</i>고구려는 졸본에서 건국하여 국내성으로<span class="wf-caret"></span></div>
    <div class="wf-hint"><span>Enter 다음 문장</span><span>따라 쓰기와 같은 입력 칸</span></div>
  </div>
</div>
<p class="wf-cap">따라 쓰기와 같은 방식으로 문장 전체를 입력하되, 빈칸 부분은 기억으로 채웁니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 입력 칸 | 문장 전체 입력. 빈칸 자리에서 틀리면 오타 표시 | 입력 중 / 오타 / 일치 | TRN-07·09·10 |

### 시안 비교

| 시안 | 사용자가 하는 것 | 레퍼런스 | 공수(가설) | 좋은 점 · 주의할 점 |
| --- | --- | --- | --- | --- |
| A 빈칸 자리에 바로 입력 | 빈칸 어절만, 문장 안에서 | 말해보카 어휘 학습 | 중간 | 문장 흐름을 보며 바로 채움 · 빈칸 사이 이동 규칙이 필요 |
| B 아래 칸에 빈칸 단어만 | 빈칸 어절만, 따로 | 망고톡 데일리 챌린지 | 작음 | 만들기 쉬움 · 문장과 입력 칸 사이를 눈이 오가야 함 |
| C 문장 전체를 다시 | 문장 전체(빈칸은 기억으로) | 없음 | 작음 | 따라 쓰기 입력 칸을 그대로 씀, 문장 전체를 한 번 더 쳐서 반복 효과 · 빈칸이 적으면 따라 쓰기와 차이가 작음 |

공수: 작음 = 기존 입력 칸을 다시 씀, 중간 = 문장 안에 입력 칸을 새로 만듦 (PM 가설, 개발 확인 필요)

## SCR-TRN-04 백지 입력 시안

원문을 보여 주지 않는 단계라 입력 단위를 시안 2개 중 투표로 정합니다(TRN-17). 백지에서는 오타가 있어도 넘어갑니다(TRN-13).

### 시안 A · 문장 하나씩

<div class="wf">
  <div class="wf-body">
    <div class="wf-top"><span>← 2회차 · 삼국의 성립과 발전</span><span class="sp"></span><span class="wf-chips"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip done">✓ 빈칸</span><span class="wf-chip on">백지</span></span><span>4 / 18</span></div>
    <div class="wf-prog"><i style="width:22%"></i></div>
    <p class="wf-prev"><i class="wf-n">1</i>앞 문장: 고구려는 졸본에서 건국하여 국내성으로 도읍을 옮겼다.</p>
    <p class="wf-sent" style="color:#a1a1aa">4번째 문장을 떠올려 써 보세요</p>
    <div class="wf-typed"><i class="wf-n">2</i>백제는 한강 유역에서<span class="wf-caret"></span></div>
    <div class="wf-hint"><span>Enter 다음 문장 (오타가 있어도 넘어가요)</span><span><i class="wf-n">3</i>모르겠어요 → 건너뛰기</span></div>
  </div>
</div>
<p class="wf-cap">앞 문장만 단서로 보여 주고, 지금 문장을 떠올려 씁니다. 마지막 문장을 마치면 비교 화면으로 갑니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 앞 문장 단서 | 바로 앞 원문 문장을 흐리게 표시(첫 문장은 회차 제목) | — | TRN-17 |
| 2 | 입력 칸 | 떠올린 문장 입력. 오타 표시 없음 | 입력 전 / 입력 중 | TRN-13 |
| 3 | 건너뛰기 | 빈 채로 다음 문장. 비교 화면에 '쓰지 않음'으로 표시 | — | TRN-14 |

### 시안 B · 회차 전체를 한 번에

<div class="wf">
  <div class="wf-body">
    <div class="wf-top"><span>← 2회차 · 삼국의 성립과 발전</span><span class="sp"></span><span class="wf-chips"><span class="wf-chip done">✓ 따라 쓰기</span><span class="wf-chip done">✓ 빈칸</span><span class="wf-chip on">백지</span></span></div>
    <p class="wf-sub"><i class="wf-n">1</i>2회차 내용을 기억나는 대로 모두 써 보세요. 문장 18개 · 약 3,600자</p>
    <div class="wf-input wf-area" style="min-height:160px"><i class="wf-n">2</i>고구려는 졸본에서 건국하여 국내성으로 수도를 옮겼다.<br>백제는 한강 유역에서<span class="wf-caret"></span></div>
    <div class="wf-foot"><span class="wf-muted">자동 저장됨</span><span class="sp"></span><span class="wf-btn"><i class="wf-n">3</i>다 썼어요 · 비교하기</span></div>
  </div>
</div>
<p class="wf-cap">손으로 하는 백지 테스트처럼 큰 칸에 한 번에 씁니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 안내 | 회차 이름, 문장 수, 글자 수 | — | — |
| 2 | 큰 입력 칸 | 자유롭게 입력. 입력할 때마다 자동 저장 | 비어 있음 / 입력 중 | TRN-12·13 |
| 3 | 비교하기 버튼 | 누르면 비교 화면으로 | 비활성(입력 없음) / 활성 | TRN-04 |

### 시안 비교

| 시안 | 사용자가 하는 것 | 레퍼런스 | 공수(가설) | 좋은 점 · 주의할 점 |
| --- | --- | --- | --- | --- |
| A 문장 하나씩 | 앞 문장을 단서로 한 문장씩 | 없음 | 작음 | 따라 쓰기와 화면이 같아 익숙함, 문장별 비교가 쉬움 · 앞 문장이 힌트가 되어 백지보다 쉬워짐 |
| B 회차 전체를 한 번에 | 큰 칸에 기억나는 대로 | 없음 (손 백지 테스트와 같은 방식) | 중간 | 진짜 백지 점검에 가까움 · 순서가 달라지면 원문과 맞춰 비교하기 어려움 |

공수: B는 문장 순서가 다른 입력을 원문과 맞추는 비교 로직이 더 필요 (PM 가설, 개발 확인 필요)

## SCR-TRN-05 백지 비교

<div class="wf">
  <div class="wf-body">
    <p class="wf-h"><i class="wf-n">1</i>2회차 백지를 마쳤어요</p>
    <p class="wf-sub">다른 부분에 밑줄을 그었어요. 스스로 확인해 보세요.</p>
    <div class="wf-cols">
      <div class="wf-col"><b><i class="wf-n">2</i>내가 쓴 것</b>고구려는 졸본에서 건국하여 국내성으로 <span class="wf-ul">수도를</span> 옮겼다.<br>백제는 한강 유역에서 성장하였다.<br><span class="wf-muted">(쓰지 않음)</span></div>
      <div class="wf-col"><b>원문</b>고구려는 졸본에서 건국하여 국내성으로 <span class="wf-ul">도읍을</span> 옮겼다.<br>백제는 한강 유역에서 성장하였다.<br><span class="wf-ul">신라는 6부의 연맹으로 출발하였다.</span></div>
    </div>
    <div class="wf-foot"><span class="wf-btn ghost"><i class="wf-n">3</i>백지 다시 쓰기</span><span class="wf-btn ghost">회차 목록</span><span class="sp"></span><span class="wf-btn"><i class="wf-n">4</i>퀴즈 풀기</span></div>
  </div>
</div>
<p class="wf-cap">점수 없이 다른 어절만 밑줄로 보여 줍니다(TRN-14).</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 완료 제목 | — | — | TRN-15 |
| 2 | 나란히 비교 | 왼쪽 입력, 오른쪽 원문. 문장끼리 줄을 맞추고 다른 어절에 밑줄. 한쪽을 스크롤하면 같이 움직임 | — | TRN-04·14 |
| 3 | 백지 다시 쓰기 | 같은 회차 백지를 처음부터 | — | TRN-11 |
| 4 | 퀴즈 풀기 | 이 회차 퀴즈로 이동 | 활성 | QIZ-02 |

## SCR-TRN-06 단계 완료

<div class="wf">
  <div class="wf-body">
    <div class="wf-center">
      <p class="wf-muted"><i class="wf-n">1</i>2회차 · 삼국의 성립과 발전</p>
      <p class="wf-h">따라 쓰기를 마쳤어요</p>
      <div style="display:flex;gap:28px;justify-content:center;margin:8px 0 12px"><div><span class="wf-big">18</span><p class="wf-muted">문장</p></div><div><span class="wf-big">24분</span><p class="wf-muted">걸린 시간</p></div></div>
      <p class="wf-sub"><i class="wf-n">2</i>이제 빈칸을 채우며 떠올려 볼까요?</p>
      <div style="display:flex;gap:8px"><span class="wf-btn ghost">회차 목록</span><span class="wf-btn"><i class="wf-n">3</i>빈칸 시작</span></div>
    </div>
  </div>
</div>
<p class="wf-cap">따라 쓰기·빈칸을 마쳤을 때. 백지를 마치면 이 화면 대신 SCR-TRN-05로 갑니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 결과 | 회차 이름, 문장 수, 걸린 시간만. 점수·경험치·연속 기록 없음 | — | TRN-15 |
| 2 | 다음 단계 안내 | 다음 단계를 한 줄로 권함 | 빈칸 / 백지 | TRN-11 |
| 3 | 다음 단계 버튼 | 다음 단계 시작 | — | TRN-11 |

## 애니메이션

- 오타 알림: 입력 영역을 좌우로 짧게 흔드는 '삐빅' 모션 (TRN-07)
- 문장 넘어가기, 빈칸 채워짐, 단계 전환 → 입력 방식이 정해지면 Claude 아티팩트로 공유
