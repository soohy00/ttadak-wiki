# 홈 화면

<div class="doc-info">
<span>화면 ID: SCR-HOM</span>
<span>정책: <a href="../policy/home">HOM 내 자료(홈) 정책</a>, TRN-05·12</span>
<span>와이어프레임: 1920×1080 설계서 보드 (낮은 완성도, 2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 자료 카드에 보여 주는 정보(회차 수, 진행, 최근 학습)가 충분한지 확인해 주세요.</li><li>(FE) 처리 중인 자료 카드가 일반 카드로 바뀌는 흐름이 구현 가능한지 확인해 주세요.</li><li>(PD) 빈 화면(1.1.2) 구성을 확인해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 <a href="https://github.com/soohy00/ttadak-wiki/issues/new?title=%5B%ED%99%88%20%ED%99%94%EB%A9%B4%5D%20" target="_blank">의견 남기기</a>로 남겨 주세요. 질문·피드백 방법은 4차 회의에서 확정해요.</p>
</div>

## 사용자 흐름

1. 로그인하면 1.1 내 자료를 본다. 자료가 없으면 빈 화면(1.1.2)에서 자료 넣기로 간다.
2. 자료 카드를 누르면 [회차 목록](./transcription)으로 가서 하던 문장부터 이어서 한다.

## 1.1.1 내 자료 · 자료 있음 · SCR-HOM-01

<a href="/ttadak-wiki/screens/scr-new-1-1-1.png" target="_blank"><img class="scr" src="/screens/scr-new-1-1-1.png" alt="화면 1-1-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>상단 바 · 자료 넣기</b><span class="kind">Button</span>: 모든 홈 화면에서 같은 자리에 있습니다. 내비게이션 형태는 4차 회의 투표로 정합니다.<ul><li>→ 클릭할 경우 2.1 자료 넣기 화면으로 이동합니다.</li></ul></li>
<li><b>페이지 제목</b><span class="kind">Text</span>: 자료 개수와 정렬 기준(최근 학습 순)을 함께 보여 줍니다.</li>
<li><b>자료 카드</b><span class="kind">Card</span>: 자료 이름, 회차 수·글자 수, 진행 막대, 완료한 회차 수, 마지막 학습 시간입니다.<ul><li>버튼은 진행 상태에 따라 시작 / 이어서 하기 / 다시 하기로 바뀝니다.</li><li>상태: default, hover</li><li>→ 카드나 버튼을 클릭할 경우 4.1 회차 목록으로 이동합니다(이어서 하기는 마지막 문장부터, TRN-12).</li></ul></li>
<li><b>더보기 메뉴</b><span class="kind">Menu</span>: 이름 바꾸기 / 삭제 2개입니다.<ul><li>→ 삭제를 클릭할 경우 "자료와 필사 기록이 지워져요" 확인 모달을 띄웁니다.</li></ul></li>
<li><b>처리 중인 자료</b><span class="kind">Card</span>: 회차를 나누는 중이거나 실패한 자료입니다. 버튼은 disabled이며, 끝나면 자동으로 일반 카드로 바뀝니다.<ul><li>상태: 나누는 중, 나누기 실패(→ 3.3)</li></ul></li>
</ol>

<p class="mk-note">새로 생긴 규칙(검토 중): 자료 이름 바꾸기·삭제, 최근 학습 순 정렬. 위키 정책서에 추가 예정</p>

## 1.1.2 내 자료 · 빈 화면 · SCR-HOM-01

<a href="/ttadak-wiki/screens/scr-new-1-1-2.png" target="_blank"><img class="scr" src="/screens/scr-new-1-1-2.png" alt="화면 1-1-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>자료 넣기</b><span class="kind">Button</span>: 빈 화면의 주 버튼입니다. 가입 직후 처음 보는 화면입니다.<ul><li>상태: default, hover, pressed</li><li>→ 클릭할 경우 2.1 자료 넣기 화면으로 이동합니다.</li></ul></li>
<li><b>샘플로 먼저 체험하기</b><span class="kind">Text Button</span>: 로그인한 사용자도 샘플을 체험할 수 있습니다. 이때는 기록을 저장합니다 [검토 중].<ul><li>→ 클릭할 경우 0.2 샘플 체험 화면(안내 띠 없이)으로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: ACC-01, UPL-14</p>

## 정할 것

- 자료 이름 바꾸기·삭제, 최근 학습 순 정렬 → [HOM 정책서](../policy/home) HOM-02·04·05 (검토 중)
- 자료 개수 상한, 휴지통, 내비게이션 형태 → HOM-07–10 (미결정)
