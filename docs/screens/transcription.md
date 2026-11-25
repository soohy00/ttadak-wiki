# 필사 화면

<div class="doc-info">
<span>화면 ID: SCR-TRN</span>
<span>정책: <a href="../policy/transcription">TRN 필사 정책</a></span>
<span>와이어프레임: 1920×1080 설계서 보드 (2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 빈칸 입력 시안 A·B·C, 백지 입력 시안 A·B 중 하나씩 골라 주세요.</li><li>(FE) 입력 비교와 한글 조합 처리(TRN-09)가 구현 가능한지 확인해 주세요.</li><li>(PD) 집중 모드 화면 구성과 오타 표시를 확인해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 페이지 맨 아래 <a href="#comments">댓글</a>로 남겨 주세요(GitHub 로그인).</p>
</div>

## 사용자 흐름

1. 회차 목록에서 회차와 단계를 고른다. 하던 단계가 있으면 이어서 한다. (TRN-11·12)
2. 문장 1개씩 원문 위에 입력하고, 맞게 다 치면 바로 다음 문장으로 넘어간다. 오타가 있으면 넘어가지 않는다. (TRN-06·07·10)
3. 단계를 마치면 다음 단계를 권한다. 백지를 마치면 원문과 비교한다. (TRN-04·15)
4. 비교를 마치면 퀴즈로 갈지 묻고, 동의하면 퀴즈로 이동한다. (QIZ-05)

- 와이어프레임은 배치와 상태만 정합니다. 색·글꼴·간격은 디자이너의 파운데이션을 따릅니다.
- **레이아웃은 확정이 아닙니다.** 화면 설계서의 배치는 흔한 레퍼런스 사례를 참고한 것이고, 따닥에 가장 맞아서 고른 것이 아닙니다. 기능과 동작(정책)은 따르되, 레이아웃과 비주얼은 디자인에서 새로 정해 주세요. 시안에 없는 레이아웃을 제안해도 됩니다. (4차 회의)
- **11/25 팀원 피드백 반영분은 [합본 v2](https://claude.ai/artifact/83KDhR3rRU3iE36nSBwRjC)에 먼저 그렸습니다.** 이 페이지의 화면 그림은 다음에 다시 그립니다. 바뀐 정책은 정책서의 변경 이력을 봐 주세요.
- 틀린 글자는 와이어프레임에서 물결 밑줄로 그렸습니다. 실제 화면에서는 빨간색입니다(TRN-07). 빨간색 값은 파운데이션의 오류 색을 씁니다.
- 화면 속 자료(한국사 요약노트)와 숫자는 예시입니다.

## 4.1 회차 목록 · 진행 · SCR-TRN-01

<a href="/ttadak-wiki/screens/scr-hf-4-1.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-1.png" alt="화면 4-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>자료 이름·진행</b><span class="kind">Title</span>: 회차 수, 글자 수, 완료한 회차 수와 진행 막대입니다. ⋯에는 이름 바꾸기·삭제가 있습니다(HOM-04·05).</li>
<li><b>회차 줄</b><span class="kind">List Item</span>: 번호·제목·예상 시간·최근 학습 시각입니다.</li>
<li><b>단계 칩</b><span class="kind">Chip</span>: 따라 쓰기·빈칸·백지 3개. 칩을 클릭하면 그 단계로 바로 갑니다(잠금 없음, TRN-11).<ul><li>상태: 시작 전, 진행 중(문장 위치), 완료</li></ul></li>
<li><b>회차 버튼</b><span class="kind">Button</span>: 진행 상태에 따라 시작 / 이어서 하기 / 다시 하기로 바뀝니다. 이어서 하기가 있으면 그 줄만 주 버튼입니다.<ul><li>→ 클릭할 경우 그 단계 필사 화면으로 이동합니다. 이어서 하기는 마지막 문장부터(TRN-12).</li></ul></li>
</ol>

<p class="mk-note">관련 정책: TRN-05·11·12, HOM-04·05. 필사 화면에서 회차를 보여 주는 방식은 TRN-19 투표</p>

## 4.2 따라 쓰기 · SCR-TRN-02

<a href="/ttadak-wiki/screens/scr-hf-4-2.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-2.png" alt="화면 4-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>나가기</b><span class="kind">Icon Button</span>: 필사 전용 바입니다. 상단 내비게이션은 보이지 않습니다.<ul><li>→ 클릭할 경우 위치를 저장하고 4.1 회차 목록으로 이동합니다.</li></ul></li>
<li><b>단계</b><span class="kind">Segmented Indicator</span>: 지금 단계를 표시합니다. 다른 단계를 클릭하면 확인 후 이동합니다.<ul><li>상태: default, selected, done</li></ul></li>
<li><b>문장 위치</b><span class="kind">Text + Progress</span>: 지금 문장 / 전체 문장. 상단 바 아래 선이 진행만큼 채워집니다.</li>
<li><b>앞·뒤 문장</b><span class="kind">Text</span>: 지금 문장 위에 앞 문장, 아래에 다음 문장을 흐리게 보여 줍니다.</li>
<li><b>원문 위 입력</b><span class="kind">Typing Text</span>: 입력 칸 없이 원문 위에 바로 칩니다. 진입하면 바로 입력할 수 있습니다(TRN-06). 친 글자는 진해지고, 틀린 글자는 그 자리에 표시합니다(실제 화면은 빨간색). 한글 조합 중인 글자는 밑줄로 두고 오타로 보지 않습니다(TRN-09).<ul><li>상태: 입력 전, 입력 중, 오타, 일치</li><li>→ 맞게 다 치면 Enter 없이 다음 문장으로 넘어갑니다(TRN-10). 끝까지 쳤는데 오타가 있으면 문장이 좌우로 흔들립니다(TRN-07).</li></ul></li>
<li><b>정확도</b><span class="kind">Stat</span>: 이번 단계의 정확도입니다. 속도(글자/분)는 보여 주지 않습니다(TRN-15, 11/25 수정).</li>
</ol>

<p class="mk-note">레퍼런스: 몽키타입 원문 위 입력, 타닥 화면 견본(11/17)의 필사 화면. 관련 정책: TRN-06·07·08·09·10</p>

## 4.3 빈칸 입력 시안 · SCR-TRN-03

보편 패턴이 없어 시안 3개를 두고 투표로 정합니다(TRN-16). 빈칸은 어절 단위입니다(TRN-03).

### 4.3.A 빈칸 시안 A · 빈칸 자리에 바로 입력 · SCR-TRN-03

<a href="/ttadak-wiki/screens/scr-hf-4-3-A.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-3-A.png" alt="화면 4-3-A"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>빈칸</b><span class="kind">Inline Text Field</span>: 문장 안 빈칸에 커서가 들어가 바로 입력합니다. 맞히면 밑줄이 옅어지고 다음 빈칸으로 넘어갑니다.<ul><li>상태: 비어 있음, 입력 중, 오타, 맞음</li></ul></li>
<li><b>키 안내</b><span class="kind">Keyboard Hint</span>: 모든 빈칸을 맞히면 Enter로 다음 문장입니다.</li>
</ol>

<p class="mk-note">상단 바와 앞 문장은 4.2와 같습니다. 레퍼런스: 말해보카 빈칸 입력. 관련 정책: TRN-03·07·09·16</p>

### 4.3.B 빈칸 시안 B · 아래 칸에 빈칸 단어만 · SCR-TRN-03

<a href="/ttadak-wiki/screens/scr-hf-4-3-B.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-3-B.png" alt="화면 4-3-B"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>지금 빈칸</b><span class="kind">Highlight</span>: 입력할 빈칸을 진하게 표시합니다. 맞히면 글자가 채워집니다.</li>
<li><b>입력 칸</b><span class="kind">Text Field</span>: 빈칸 어절만 입력합니다.<ul><li>상태: 입력 중, 오타, 맞음</li></ul></li>
<li><b>키 안내</b><span class="kind">Keyboard Hint</span>: Enter로 확인하면 다음 빈칸으로 갑니다.</li>
</ol>

<p class="mk-note">상단 바와 앞 문장은 4.2와 같습니다. 레퍼런스: 망고톡 단어 입력. 관련 정책: TRN-03·07·09·16</p>

### 4.3.C 빈칸 시안 C · 문장 전체를 다시 · SCR-TRN-03

<a href="/ttadak-wiki/screens/scr-hf-4-3-C.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-3-C.png" alt="화면 4-3-C"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>입력 칸</b><span class="kind">Text Field</span>: 따라 쓰기와 같은 입력 칸입니다. 문장 전체를 입력하고 빈칸 부분은 기억으로 채웁니다.<ul><li>상태: 입력 중, 오타, 일치</li></ul></li>
</ol>

<p class="mk-note">상단 바와 앞 문장은 4.2와 같습니다. 레퍼런스: 같은 사례를 찾지 못했어요. 관련 정책: TRN-03·07·09·16</p>

### 시안 비교

| 시안 | 사용자가 하는 것 | 레퍼런스 | 공수(가설) | 좋은 점 · 주의할 점 |
| --- | --- | --- | --- | --- |
| A 빈칸 자리에 바로 입력 | 빈칸 어절만, 문장 안에서 | 말해보카 어휘 학습 | 중간 | 문장 흐름을 보며 바로 채움 · 빈칸 사이 이동 규칙이 필요 |
| B 아래 칸에 빈칸 단어만 | 빈칸 어절만, 따로 | 망고톡 데일리 챌린지 | 작음 | 만들기 쉬움 · 문장과 입력 칸 사이를 눈이 오가야 함 |
| C 문장 전체를 다시 | 문장 전체(빈칸은 기억으로) | 없음 | 작음 | 따라 쓰기 입력 칸을 그대로 씀, 문장 전체를 한 번 더 쳐서 반복 효과 · 빈칸이 적으면 따라 쓰기와 차이가 작음 |

공수: 작음 = 기존 입력 칸을 다시 씀, 중간 = 문장 안에 입력 칸을 새로 만듦 (PM 가설, 개발 확인 필요)

## 4.4 백지 입력 시안 · SCR-TRN-04

원문을 보여 주지 않는 단계라 입력 단위를 시안 2개 중 투표로 정합니다(TRN-17). 백지에서는 오타가 있어도 넘어갑니다(TRN-13).

### 4.4.A 백지 시안 A · 문장 하나씩 · SCR-TRN-04

<a href="/ttadak-wiki/screens/scr-hf-4-4-A.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-4-A.png" alt="화면 4-4-A"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>앞 문장</b><span class="kind">Text</span>: 바로 앞 원문 문장을 단서로 흐리게 보여 줍니다. 첫 문장은 회차 제목이 단서입니다.</li>
<li><b>입력 칸</b><span class="kind">Text Field</span>: 떠올린 문장을 입력합니다. 오타를 표시하지 않고 넘어갑니다(TRN-13).<ul><li>상태: 입력 전, 입력 중</li></ul></li>
<li><b>건너뛰기</b><span class="kind">Text Button</span>: 빈 채로 다음 문장으로 넘어갑니다. 비교 화면에 "쓰지 않음"으로 표시합니다.<ul><li>→ 마지막 문장을 마치면 4.5 백지 비교로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">상단 바는 4.2와 같습니다. "오타가 있어도 넘어가요"는 앞 단계와 규칙이 달라 한 줄로 알립니다. 관련 정책: TRN-12·13·14·17</p>

### 4.4.B 백지 시안 B · 회차 전체를 한 번에 · SCR-TRN-04

<a href="/ttadak-wiki/screens/scr-hf-4-4-B.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-4-B.png" alt="화면 4-4-B"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>안내</b><span class="kind">Caption</span>: 회차의 문장 수를 함께 보여 줍니다.</li>
<li><b>큰 입력 칸</b><span class="kind">Text Area</span>: 자유롭게 입력합니다. 입력할 때마다 자동 저장합니다(TRN-12).<ul><li>상태: 비어 있음, 입력 중</li></ul></li>
<li><b>비교하기</b><span class="kind">Button</span>: 입력이 없으면 disabled입니다.<ul><li>→ 클릭할 경우 4.5 백지 비교로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">상단 바는 4.2와 같고, 문장 위치는 쓰지 않습니다. 관련 정책: TRN-12·13·14·17</p>

### 시안 비교

| 시안 | 사용자가 하는 것 | 레퍼런스 | 공수(가설) | 좋은 점 · 주의할 점 |
| --- | --- | --- | --- | --- |
| A 문장 하나씩 | 앞 문장을 단서로 한 문장씩 | 없음 | 작음 | 따라 쓰기와 화면이 같아 익숙함, 문장별 비교가 쉬움 · 앞 문장이 힌트가 되어 백지보다 쉬워짐 |
| B 회차 전체를 한 번에 | 큰 칸에 기억나는 대로 | 없음 (손 백지 테스트와 같은 방식) | 중간 | 진짜 백지 점검에 가까움 · 순서가 달라지면 원문과 맞춰 비교하기 어려움 |

공수: B는 문장 순서가 다른 입력을 원문과 맞추는 비교 로직이 더 필요 (PM 가설, 개발 확인 필요)

## 4.5 백지 비교 · SCR-TRN-05

<a href="/ttadak-wiki/screens/scr-hf-4-5.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-5.png" alt="화면 4-5"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>완료 제목</b><span class="kind">Title</span>: 점수·정답률은 보여 주지 않습니다(TRN-14). 밑줄의 뜻만 한 줄로 알립니다.</li>
<li><b>나란히 비교</b><span class="kind">Compare View</span>: 왼쪽 입력, 오른쪽 원문. 문장끼리 줄을 맞추고 다른 어절에 밑줄을 긋습니다. 한쪽을 스크롤하면 같이 움직입니다.</li>
<li><b>다시 쓰기·회차 목록</b><span class="kind">Button</span>: 상태: default, hover, pressed<ul><li>→ 백지 다시 쓰기는 4.4, 회차 목록은 4.1로 이동합니다.</li></ul></li>
<li><b>퀴즈 풀기</b><span class="kind">Button</span>: 화면의 주 버튼입니다.<ul><li>→ 클릭할 경우 5.1 퀴즈 풀기로 이동합니다(4차 회의 후 설계).</li></ul></li>
</ol>

<p class="mk-note">상단 바는 4.2와 같고, 세 단계 모두 완료로 표시합니다. 관련 정책: TRN-04·14, QIZ-02</p>

## 4.6 단계 완료 · SCR-TRN-06

<a href="/ttadak-wiki/screens/scr-hf-4-6.png" target="_blank"><img class="scr" src="/screens/scr-hf-4-6.png" alt="화면 4-6"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>완료 제목</b><span class="kind">Title</span>: 마친 단계 이름을 넣습니다.</li>
<li><b>결과</b><span class="kind">Stat</span>: 쓴 글자 수만 보여 줍니다. 걸린 시간은 저장만 하고 보여 주지 않습니다. 점수·경험치·연속 기록은 없습니다(TRN-15, 11/25 수정).</li>
<li><b>다음 단계 시작</b><span class="kind">Button</span>: 따라 쓰기 → 빈칸, 빈칸 → 백지. 샘플 체험 중이면 "기록을 저장하려면 로그인하세요"와 로그인 버튼을 함께 노출합니다(0.2).<ul><li>→ 클릭할 경우 다음 단계로 이동합니다. 백지를 마치면 이 화면 대신 4.5로 갑니다.</li></ul></li>
</ol>

<p class="mk-note">상단 바는 4.2와 같습니다. 관련 정책: TRN-05·11·15</p>

## 애니메이션

- 오타 알림: 입력 영역을 좌우로 짧게 흔드는 '삐빅' 모션 (TRN-07)
- 문장 넘어가기, 빈칸 채워짐, 단계 전환 → 입력 방식이 정해지면 Claude 아티팩트로 공유
