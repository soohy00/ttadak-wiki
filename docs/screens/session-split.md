# 회차 구분 화면

<div class="doc-info">
<span>화면 ID: SCR-SEC</span>
<span>정책: <a href="../policy/session-split">SEC 회차 구분 정책</a></span>
<span>와이어프레임: 1920×1080 설계서 보드 (2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 회차 조정 시안 A·B·C 중 하나를 골라 주세요.</li><li>(FE·BE) 3.1 대기와 자동 재요청 흐름이 구현 가능한지 확인해 주세요.</li><li>(PD) 회차 카드에 보여 주는 정보를 확인해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 페이지 맨 아래 <a href="#comments">댓글</a>로 남겨 주세요(GitHub 로그인).</p>
</div>

## 사용자 흐름

1. 자료를 올리면 AI가 회차를 나누는 동안 진행 단계를 본다. (SEC-01)
2. AI가 나눈 회차 목록을 보고, 필요하면 순서·제목·범위를 조정한다. (SEC-02·14)
3. '이 회차로 필사 시작'을 누르면 회차가 확정되고 1회차 필사로 이동한다. (SEC-03)

- 와이어프레임은 배치와 상태만 정합니다. 색·글꼴·간격은 디자이너의 파운데이션을 따릅니다.
- **레이아웃은 확정이 아닙니다.** 화면 설계서의 배치는 흔한 레퍼런스 사례를 참고한 것이고, 따닥에 가장 맞아서 고른 것이 아닙니다. 기능과 동작(정책)은 따르되, 레이아웃과 비주얼은 디자인에서 새로 정해 주세요. 시안에 없는 레이아웃을 제안해도 됩니다. (4차 회의)
- 화면 속 자료(한국사 요약노트)와 숫자는 예시입니다.

## 3.1 회차 나누는 중 · SCR-SEC-01

<a href="/ttadak-wiki/screens/scr-hf-3-1.png" target="_blank"><img class="scr" src="/screens/scr-hf-3-1.png" alt="화면 3-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>상태 제목</b><span class="kind">Title</span>: 자료 이름·글자 수·보통 걸리는 시간을 함께 보여 줍니다. 자동 재요청 중이면 "다시 나누는 중"으로 바뀝니다(SEC-07).</li>
<li><b>진행 단계</b><span class="kind">Stepper</span>: 글자 읽기 → 회차 나누기 → 회차 확인. 지금 단계만 진하게 표시합니다.</li>
<li><b>목록 자리</b><span class="kind">Skeleton</span>: 결과 회차 카드가 들어올 자리입니다. 3.2와 같은 자리에 같은 크기로 둡니다.<ul><li>→ 완료되면 3.2 회차 확인, 실패하면 3.3 나누기 실패로 이동합니다.</li></ul></li>
<li><b>나가기 안내</b><span class="kind">Caption</span>: 화면을 떠나도 처리는 계속됩니다. 내 자료에는 "회차 나누는 중" 카드로 보입니다(HOM-06).</li>
<li><b>취소</b><span class="kind">Button</span>: 상태: default, hover, pressed<ul><li>→ 클릭할 경우 "자료를 지우고 처음으로 돌아갈까요?" 모달 후 2.1로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">레퍼런스: 매니패스트 "자료 2개를 읽는 중" 진행 표시. 관련 정책: UPL-07, SEC-01·07·10, HOM-06</p>

## 3.2 회차 확인 · SCR-SEC-02

<a href="/ttadak-wiki/screens/scr-hf-3-2.png" target="_blank"><img class="scr" src="/screens/scr-hf-3-2.png" alt="화면 3-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>결과 제목</b><span class="kind">Title</span>: 나눈 회차 수를 보여 줍니다. 1개면 "자료가 짧아 1회차로 만들었어요"로 바뀝니다(SEC-08).</li>
<li><b>자료 요약</b><span class="kind">Text</span>: 자료 이름, 전체 글자 수, 전체 예상 시간입니다(SEC-13).</li>
<li><b>회차 카드</b><span class="kind">Card List</span>: 번호·제목·글자 수·예상 시간·첫 문장. 카드를 클릭하면 본문을 펼쳐 봅니다.<ul><li>고치는 방법(⋯)은 3.2.A·B·C 시안 중 투표로 정합니다.</li><li>상태: default, expanded</li></ul></li>
<li><b>다시 나누기</b><span class="kind">Button</span>: 상태: default, hover, pressed, loading<ul><li>→ 클릭할 경우 "고친 내용은 사라져요" 모달 후 3.1로 이동합니다.</li></ul></li>
<li><b>필사 시작</b><span class="kind">Button</span>: 화면의 주 버튼입니다. 모든 회차를 빼면 disabled입니다.<ul><li>→ 클릭할 경우 회차를 확정하고 4.1 회차 목록으로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: SEC-01·03·08·12·13</p>

## 3.2 회차 조정 시안 · SCR-SEC-03

보편 패턴이 없는 경험이라 시안 3개를 두고 투표로 정합니다(SEC-04). 세 시안 모두 SCR-SEC-02 위에서 동작합니다.

### 3.2.A 회차 조정 시안 A · 목록에서 고치기 · SCR-SEC-03

<a href="/ttadak-wiki/screens/scr-hf-3-2-A.png" target="_blank"><img class="scr" src="/screens/scr-hf-3-2-A.png" alt="화면 3-2-A"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>끌기</b><span class="kind">Drag Handle</span>: 카드를 끌어 순서를 바꿉니다. 놓으면 회차 번호를 다시 매깁니다.<ul><li>상태: default, dragging</li></ul></li>
<li><b>제목 고치기</b><span class="kind">Inline Text Field</span>: 제목을 클릭하면 그 자리에서 고칩니다. 1–30자, Enter로 저장.</li>
<li><b>더보기 메뉴</b><span class="kind">Menu</span>: 다음 회차와 합치기 / 둘로 나누기 / 필사에서 빼기. 둘로 나누기는 카드가 펼쳐지고 문단 사이를 클릭해 나눌 곳을 고릅니다.</li>
<li><b>뺀 회차</b><span class="kind">Card</span>: 흐리게 남기고 [되돌리기]를 노출합니다. 모두 빼면 "필사할 회차를 하나 이상 남겨 주세요".</li>
<li><b>처음 안내</b><span class="kind">Tooltip</span>: 끌기는 보기 전에는 모르는 동작이라 처음 한 번만 말풍선으로 알립니다.</li>
</ol>

<p class="mk-note">레퍼런스: 뤼튼 PPT 초안 목차 편집, 노션 블록 끌기. 관련 정책: SEC-02·11·12·14</p>

### 3.2.B 회차 조정 시안 B · 원문에서 선 옮기기 · SCR-SEC-03

<a href="/ttadak-wiki/screens/scr-hf-3-2-B.png" target="_blank"><img class="scr" src="/screens/scr-hf-3-2-B.png" alt="화면 3-2-B"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>회차 목록</b><span class="kind">Side List</span>: 클릭하면 원문의 그 회차 위치로 이동합니다.<ul><li>상태: default, selected</li></ul></li>
<li><b>경계선</b><span class="kind">Divider Handle</span>: 끌어서 다른 문단 사이로 옮기면 앞뒤 회차 범위가 바뀝니다. 이름표를 클릭하면 제목을 고칩니다. 선을 지우면 앞 회차와 합쳐집니다.<ul><li>상태: default, dragging</li></ul></li>
<li><b>나누기 자리</b><span class="kind">Hover Action</span>: 문단 사이에 마우스를 올리면 나타납니다. 클릭하면 새 경계선을 만듭니다.</li>
<li><b>처음 안내</b><span class="kind">Tooltip</span>: 처음 한 번만 노출합니다.</li>
</ol>

<p class="mk-note">레퍼런스: 클래스101 커리큘럼(왼쪽 목록). 경계선 끌기는 같은 사례를 찾지 못했어요. 관련 정책: SEC-02·11·12·14</p>

### 3.2.C 회차 조정 시안 C · 회차 수로 다시 나누기 · SCR-SEC-03

<a href="/ttadak-wiki/screens/scr-hf-3-2-C.png" target="_blank"><img class="scr" src="/screens/scr-hf-3-2-C.png" alt="화면 3-2-C"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>회차 수</b><span class="kind">Segmented Control</span>: 자동 / 2–[최대: ?]개. 진입 시 AI가 정한 수가 선택된 상태입니다.<ul><li>상태: default, selected</li></ul></li>
<li><b>다시 나누기</b><span class="kind">Button</span>: 회차 수를 바꾸기 전에는 disabled입니다.<ul><li>→ 클릭할 경우 고른 수로 3.1 회차 나누는 중으로 이동합니다.</li></ul></li>
<li><b>제목 고치기</b><span class="kind">Icon Button</span>: 범위는 직접 고치지 않고 제목만 고칩니다.</li>
</ol>

<p class="mk-note">레퍼런스: 뤼튼 PPT 초안 분량 선택. 관련 정책: SEC-07·14·16</p>

### 시안 비교

| 시안 | 사용자가 할 수 있는 것 | 레퍼런스 | 공수(가설) | 좋은 점 · 주의할 점 |
| --- | --- | --- | --- | --- |
| A 목록에서 고치기 | 순서·제목·합치기·나누기·빼기 모두 | 뤼튼 PPT 초안 '목차 선정' | 중간 | 익숙한 목록 편집 · 나눌 위치를 고를 때만 원문을 펼쳐야 함 |
| B 원문에서 선 옮기기 | 범위를 문단 단위로 가장 세밀하게 | 클래스101 커리큘럼(왼쪽 목록) | 큼 | 원문을 보며 정확히 나눔 · 화면이 넓어야 하고 구현이 가장 많음 |
| C 회차 수로 다시 나누기 | 순서·제목 + 회차 수 | 뤼튼 PPT 초안 '분량' 선택 | 작음 | 가장 빨리 만듦 · 범위를 직접 못 고쳐 SEC-02 '내용 조정'을 일부만 충족 |

공수: 작음 = 기존 목록에 버튼·조건만 더함, 중간 = 끌기·메뉴 등 상호작용을 새로 만듦, 큼 = 새 편집 화면 (PM 가설, 개발 확인 필요)

## 3.3 나누기 실패 · SCR-SEC-04

<a href="/ttadak-wiki/screens/scr-hf-3-3.png" target="_blank"><img class="scr" src="/screens/scr-hf-3-3.png" alt="화면 3-3"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>실패 안내</b><span class="kind">Title</span>: 자동 재요청(1회)까지 실패했을 때 노출합니다.</li>
<li><b>나누지 않고 시작</b><span class="kind">Button</span>: 상태: default, hover, pressed<ul><li>→ 클릭할 경우 자료 전체를 1회차로 만들고 3.2로 이동합니다.</li></ul></li>
<li><b>다시 나누기</b><span class="kind">Button</span>: 상태: default, hover, pressed, loading<ul><li>→ 클릭할 경우 3.1로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: SEC-07·08·09·10</p>

## 애니메이션

- 나누는 중 회색 막대, 카드 끌기·놓기, 경계선 이동 → 조정 방법이 정해지면 Claude 아티팩트로 공유
