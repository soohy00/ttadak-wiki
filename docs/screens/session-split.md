# 회차 구분 화면

<div class="doc-info">
<span>화면 ID: SCR-SEC</span>
<span>정책: <a href="../policy/session-split">SEC 회차 구분 정책</a></span>
<span>와이어프레임: 1사이클 시안 (무채색, 2026-11-23). 조정 방법은 시안 A·B·C 투표 중</span>
</div>

## 사용자 흐름

1. 자료를 올리면 AI가 회차를 나누는 동안 진행 단계를 본다. (SEC-01)
2. AI가 나눈 회차 목록을 보고, 필요하면 순서·제목·범위를 조정한다. (SEC-02·14)
3. '이 회차로 필사 시작'을 누르면 회차가 확정되고 1회차 필사로 이동한다. (SEC-03)

- 와이어프레임은 배치와 상태만 정합니다. 색·글꼴·간격은 디자이너의 파운데이션을 따릅니다.
- 화면 속 자료(한국사 요약노트)와 숫자는 예시입니다.

## SCR-SEC-01 회차 나누는 중

<div class="wf">
  <div class="wf-bar"><b>따닥</b><span>내 자료</span><span class="sp"></span><span class="wf-dot"></span></div>
  <div class="wf-body">
    <div class="wf-steps"><i class="wf-n">1</i><span class="done">✓ 글자 읽기</span><span>—</span><span class="on">회차 나누기</span><span>—</span><span>회차 확인</span></div>
    <div class="wf-center">
      <div class="wf-spin"></div>
      <p class="wf-h"><i class="wf-n">2</i>회차를 나누고 있어요</p>
      <p class="wf-sub">한국사_요약노트 · 12,400자 · 보통 30초 안팎 걸려요</p>
    </div>
    <div class="wf-list"><i class="wf-n">3</i>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><div><div class="wf-skel" style="width:50%"></div><div class="wf-skel" style="width:30%"></div></div><span></span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><div><div class="wf-skel" style="width:60%"></div><div class="wf-skel" style="width:25%"></div></div><span></span></div>
    </div>
    <div class="wf-foot"><span class="wf-btn ghost"><i class="wf-n">4</i>취소</span></div>
  </div>
</div>
<p class="wf-cap">추출이 끝나고 AI 응답을 기다리는 상태. 재요청(SEC-07·10)도 이 화면에서 이어집니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 진행 단계 | 지금 단계 표시 | 글자 읽기 / 회차 나누기 / 회차 확인 | UPL-07, SEC-01 |
| 2 | 안내 문구 | 자료 이름·글자 수·예상 대기 시간 표시 | 나누는 중 / 다시 나누는 중 | SEC-07 |
| 3 | 목록 자리 | 회차 목록이 들어올 자리를 회색 막대로 표시 | — | — |
| 4 | 취소 버튼 | 누르면 확인 후 자료 넣기 화면으로 돌아감(자료는 지움) | 활성 | — |

## SCR-SEC-02 회차 확인

<div class="wf">
  <div class="wf-bar"><b>따닥</b><span>내 자료</span><span class="sp"></span><span class="wf-dot"></span></div>
  <div class="wf-body">
    <div class="wf-steps"><span class="done">✓ 글자 읽기</span><span>—</span><span class="done">✓ 회차 나누기</span><span>—</span><span class="on">회차 확인</span></div>
    <p class="wf-h"><i class="wf-n">1</i>AI가 회차 4개로 나눴어요</p>
    <p class="wf-sub">순서와 내용을 확인하고, 필요하면 고쳐 주세요.</p>
    <div class="wf-sum"><i class="wf-n">2</i><span>한국사_요약노트</span><span>12,400자</span><span>예상 1시간 50분</span></div>
    <div class="wf-list"><i class="wf-n">3</i>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">1회차 · 선사 시대와 고조선</span><span class="wf-menu">⋯</span><span class="m">2,800자 · 약 25분 · "구석기 시대에는 뗀석기를 쓰고…"</span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">2회차 · 삼국의 성립과 발전</span><span class="wf-menu">⋯</span><span class="m">3,600자 · 약 30분 · "고구려는 졸본에서 건국하여…"</span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">3회차 · 통일 신라와 발해</span><span class="wf-menu">⋯</span><span class="m">3,100자 · 약 28분 · "신라는 당과 연합하여…"</span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">4회차 · 고려의 정치와 사회</span><span class="wf-menu">⋯</span><span class="m">2,900자 · 약 27분 · "왕건은 송악을 도읍으로…"</span></div>
    </div>
    <div class="wf-foot"><span class="wf-btn ghost"><i class="wf-n">4</i>다시 나누기</span><span class="sp"></span><span class="wf-btn"><i class="wf-n">5</i>이 회차로 필사 시작</span></div>
  </div>
</div>
<p class="wf-cap">AI 결과를 받은 직후. 회차 카드를 고치는 방법(⋮⋮·⋯의 동작)은 아래 SCR-SEC-03 시안 중 투표로 정합니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 결과 제목 | 나눈 회차 수 표시. 1개면 SEC-08 문구 | 여러 개 / 1개 | SEC-01·08 |
| 2 | 자료 요약 | 자료 이름, 전체 글자 수, 전체 예상 시간 | — | SEC-13 |
| 3 | 회차 목록 | 회차마다 번호·제목·글자 수·예상 시간·첫 문장. 카드를 누르면 본문 미리 보기 | 기본 / 펼침 / 편집 중 | SEC-02·12·13·14 |
| 4 | 다시 나누기 버튼 | 확인 후 AI에 다시 요청(고친 내용은 사라짐) | 활성 / 진행 중 | SEC-07 |
| 5 | 필사 시작 버튼 | 누르면 회차 확정, 1회차 필사로 이동 | 활성 / 비활성(모든 회차를 뺐을 때) | SEC-03·14 |

## SCR-SEC-03 회차 조정 시안

보편 패턴이 없는 경험이라 시안 3개를 두고 투표로 정합니다(SEC-04). 세 시안 모두 SCR-SEC-02 위에서 동작합니다.

### 시안 A · 목록에서 고치기

<div class="wf">
  <div class="wf-body">
    <p class="wf-tip">끌어서 순서를 바꿀 수 있어요</p>
    <div class="wf-list" style="margin-top:8px">
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">1회차 · 선사 시대와 고조선</span><span class="wf-menu">⋯</span><span class="m">2,800자 · 약 25분</span></div>
      <div class="wf-card drag"><span class="wf-handle"><i class="wf-n">1</i>⋮⋮</span><span class="t">3회차 · 통일 신라와 발해</span><span class="wf-menu">⋯</span><span class="m">끌어서 옮기는 중</span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><div class="wf-input" style="padding:4px 8px"><i class="wf-n">2</i>삼국의 성립과 발전|</div><span class="wf-pop"><span class="wf-menu"><i class="wf-n">3</i>⋯</span><span class="box"><div>다음 회차와 합치기</div><div>둘로 나누기</div><div>필사에서 빼기</div></span></span><span class="m">3,600자 · 약 30분</span></div>
      <div class="wf-card out"><span class="wf-handle">⋮⋮</span><span class="t">4회차 · 고려의 정치와 사회</span><span class="wf-menu">되돌리기</span><span class="m"><i class="wf-n">4</i>필사에서 뺐어요</span></div>
    </div>
  </div>
</div>
<p class="wf-cap">회차 카드 단위로 고칩니다. '둘로 나누기'를 누르면 카드가 펼쳐지고 문단 사이를 눌러 나눌 위치를 고릅니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 끌기 손잡이 | 카드를 끌어 순서 바꾸기. 놓으면 회차 번호 다시 매김 | 기본 / 끄는 중 | SEC-02·14 |
| 2 | 제목 | 제목을 누르면 바로 수정(30자) | 보기 / 수정 중 | SEC-12 |
| 3 | 더보기 메뉴 | 다음 회차와 합치기 / 둘로 나누기(문단 사이 선택) / 필사에서 빼기 | 닫힘 / 열림 | SEC-11·14 |
| 4 | 뺀 회차 | 흐리게 남기고 '되돌리기' 표시 | 뺌 | SEC-14 |

### 시안 B · 원문에서 나누는 선 옮기기

<div class="wf">
  <div class="wf-split">
    <div class="wf-side"><i class="wf-n">1</i>
      <div class="it">1회차 · 선사 시대와 고조선</div>
      <div class="it on">2회차 · 삼국의 성립과 발전</div>
      <div class="it">3회차 · 통일 신라와 발해</div>
      <div class="it">4회차 · 고려의 정치와 사회</div>
    </div>
    <div class="wf-doc">
      <p class="wf-para">…고조선은 8조법으로 사회 질서를 유지하였다.</p>
      <div class="wf-cut"><i class="wf-n">2</i>2회차 · 삼국의 성립과 발전 ✎</div>
      <p class="wf-para">고구려는 졸본에서 건국하여 국내성으로 도읍을 옮겼다…</p>
      <div class="wf-cut ghost"><i class="wf-n">3</i>+ 여기서 나누기</div>
      <p class="wf-para">백제는 한강 유역에서 성장하여…</p>
      <p class="wf-para">신라는 6부의 연맹으로 출발하여…</p>
      <div class="wf-cut">3회차 · 통일 신라와 발해 ✎ <span class="wf-muted">×</span></div>
      <p class="wf-para">신라는 당과 연합하여 백제와 고구려를…</p>
    </div>
  </div>
</div>
<p class="wf-cap">원문 전체를 보며 회차 경계선을 직접 다룹니다. 왼쪽 목록은 순서 바꾸기와 이동용입니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 회차 목록 | 누르면 원문의 해당 위치로 이동. 끌어서 순서 바꾸기 | 기본 / 선택됨 | SEC-02·14 |
| 2 | 경계선 | 끌어서 다른 문단 사이로 옮기기(범위 조정). ✎ 제목 수정, × 지우기(앞 회차와 합치기) | 기본 / 끄는 중 | SEC-11·12·14 |
| 3 | 나누기 자리 | 문단 사이에 마우스를 올리면 보이고, 누르면 새 경계선 생성 | 숨김 / 보임 | SEC-11·14 |

### 시안 C · 회차 수를 정해 다시 나누기

<div class="wf">
  <div class="wf-body">
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px"><span class="wf-label" style="margin:0"><i class="wf-n">1</i>회차 수</span><span class="wf-seg"><span>자동</span><span>2</span><span>3</span><span class="on">4</span><span>5</span><span>6</span></span><span class="wf-btn sm ghost"><i class="wf-n">2</i>이대로 다시 나누기</span></div>
    <div class="wf-list">
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">1회차 · 선사 시대와 고조선</span><span class="wf-menu">✎</span><span class="m">2,800자 · 약 25분</span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">2회차 · 삼국의 성립과 발전</span><span class="wf-menu"><i class="wf-n">3</i>✎</span><span class="m">3,600자 · 약 30분</span></div>
      <div class="wf-card"><span class="wf-handle">⋮⋮</span><span class="t">3회차 · 통일 신라와 발해</span><span class="wf-menu">✎</span><span class="m">3,100자 · 약 28분</span></div>
    </div>
  </div>
</div>
<p class="wf-cap">범위는 직접 고치지 않고 회차 수를 바꿔 AI에 다시 맡깁니다. 순서 끌기와 제목 수정만 직접 합니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 회차 수 선택 | 자동 / 2–[최대: ?]개 중 고르기 | 자동(기본) / 숫자 선택 | SEC-14·16 |
| 2 | 다시 나누기 버튼 | 고른 회차 수로 AI에 다시 요청 → SCR-SEC-01 | 비활성(바꾼 것 없음) / 활성 | SEC-07 |
| 3 | 제목 수정 | 누르면 제목 수정 | 보기 / 수정 중 | SEC-12 |

### 시안 비교

| 시안 | 사용자가 할 수 있는 것 | 레퍼런스 | 공수(가설) | 좋은 점 · 주의할 점 |
| --- | --- | --- | --- | --- |
| A 목록에서 고치기 | 순서·제목·합치기·나누기·빼기 모두 | 뤼튼 PPT 초안 '목차 선정' | 중간 | 익숙한 목록 편집 · 나눌 위치를 고를 때만 원문을 펼쳐야 함 |
| B 원문에서 선 옮기기 | 범위를 문단 단위로 가장 세밀하게 | 클래스101 커리큘럼(왼쪽 목록) | 큼 | 원문을 보며 정확히 나눔 · 화면이 넓어야 하고 구현이 가장 많음 |
| C 회차 수로 다시 나누기 | 순서·제목 + 회차 수 | 뤼튼 PPT 초안 '분량' 선택 | 작음 | 가장 빨리 만듦 · 범위를 직접 못 고쳐 SEC-02 '내용 조정'을 일부만 충족 |

공수: 작음 = 기존 목록에 버튼·조건만 더함, 중간 = 끌기·메뉴 등 상호작용을 새로 만듦, 큼 = 새 편집 화면 (PM 가설, 개발 확인 필요)

## SCR-SEC-04 나누기 실패

<div class="wf">
  <div class="wf-body">
    <div class="wf-center">
      <div class="wf-ico">!</div>
      <p class="wf-h"><i class="wf-n">1</i>회차를 나누지 못했어요</p>
      <p class="wf-sub">다시 나누거나, 나누지 않고 1회차로 시작할 수 있어요.</p>
      <div style="display:flex;gap:8px"><span class="wf-btn ghost"><i class="wf-n">2</i>나누지 않고 시작</span><span class="wf-btn"><i class="wf-n">3</i>다시 나누기</span></div>
    </div>
  </div>
</div>
<p class="wf-cap">자동 재요청(1회)까지 실패한 경우.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 실패 안내 | — | — | SEC-07 |
| 2 | 나누지 않고 시작 | 자료 전체를 1회차로 만들고 SCR-SEC-02로 이동 | 활성 | SEC-07·08 |
| 3 | 다시 나누기 | AI에 다시 요청 → SCR-SEC-01 | 활성 | SEC-07 |

## 애니메이션

- 나누는 중 회색 막대, 카드 끌기·놓기, 경계선 이동 → 조정 방법이 정해지면 Claude 아티팩트로 공유
