# 홈 화면

<div class="doc-info">
<span>화면 ID: SCR-HOM</span>
<span>정책: <a href="../policy/home">HOM 내 자료(홈) 정책</a>, TRN-05·12</span>
<span>와이어프레임: 1920×1080 설계서 보드 (2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 자료 카드에 보여 주는 정보(회차 수, 진행, 최근 학습)가 충분한지 확인해 주세요.</li><li>(FE) 처리 중인 자료 카드가 일반 카드로 바뀌는 흐름이 구현 가능한지 확인해 주세요.</li><li>(PD) 빈 화면(1.1.2) 구성을 확인해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 페이지 맨 아래 <a href="#comments">댓글</a>로 남겨 주세요(GitHub 로그인).</p>
</div>

> **레이아웃은 확정이 아닙니다.** 화면 설계서의 배치는 흔한 레퍼런스 사례를 참고한 것이고, 따닥에 가장 맞아서 고른 것이 아닙니다. 기능과 동작(정책)은 따르되, 레이아웃과 비주얼은 디자인에서 새로 정해 주세요. 시안에 없는 레이아웃을 제안해도 됩니다. (4차 회의)

## 사용자 흐름

1. 로그인하면 1.1 내 자료를 본다. 자료가 없으면 빈 화면(1.1.2)에서 자료 넣기로 간다.
2. 자료 카드를 누르면 [회차 목록](./transcription)으로 가서 하던 문장부터 이어서 한다.

## 1.1.1 내 자료 · 자료 있음 · SCR-HOM-01

<a href="/ttadak-wiki/screens/scr-hf-1-1-1.png" target="_blank"><img class="scr" src="/screens/scr-hf-1-1-1.png" alt="화면 1-1-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>자료 넣기</b><span class="kind">Button</span>: 모든 화면에서 같은 자리에 있습니다. 내비게이션 형태는 4차 회의 투표로 정합니다(HOM-10).<ul><li>→ 클릭할 경우 2.1 자료 넣기로 이동합니다.</li></ul></li>
<li><b>페이지 제목·정렬</b><span class="kind">Title</span>: 최근 학습 순으로 정렬합니다(HOM-02). 정렬 바꾸기는 1사이클에 두지 않습니다 [검토 중].</li>
<li><b>자료 카드</b><span class="kind">Card</span>: 이름, 회차 수·글자 수, 진행 막대, 완료한 회차, 최근 학습 시각(HOM-03).<ul><li>버튼은 시작 / 이어서 하기 / 다시 하기로 바뀝니다.</li><li>상태: default, hover</li><li>→ 카드를 클릭할 경우 4.1, 버튼을 클릭할 경우 그 단계 필사 화면으로 이동합니다(TRN-12).</li></ul></li>
<li><b>처리 중인 자료</b><span class="kind">Card</span>: 회차를 나누는 중이면 버튼을 누를 수 없고, 끝나면 일반 카드로 바뀝니다. 실패하면 "나누지 못했어요"로 바뀌고 클릭 시 3.3으로 갑니다(HOM-06).</li>
<li><b>더보기 메뉴</b><span class="kind">Menu</span>: 이름 바꾸기 / 삭제(HOM-04·05).<ul><li>→ 삭제를 클릭할 경우 "이 자료와 필사 기록이 모두 지워져요" 모달을 띄웁니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: HOM-01–06·10, TRN-12</p>

## 1.1.2 내 자료 · 빈 화면 · SCR-HOM-01

<a href="/ttadak-wiki/screens/scr-hf-1-1-2.png" target="_blank"><img class="scr" src="/screens/scr-hf-1-1-2.png" alt="화면 1-1-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>자료 넣기</b><span class="kind">Button</span>: 빈 화면의 주 버튼입니다. 가입 직후 처음 보는 화면입니다(HOM-01).<ul><li>→ 클릭할 경우 2.1 자료 넣기로 이동합니다.</li></ul></li>
<li><b>샘플로 먼저 체험하기</b><span class="kind">Text Button</span>: 로그인한 사용자도 샘플을 체험할 수 있습니다. 기록 저장 여부는 HOM-09에서 정합니다.<ul><li>→ 클릭할 경우 0.2 샘플 체험(안내 띠 없이)으로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: HOM-01·09, ACC-01</p>

## 정할 것

- 자료 이름 바꾸기·삭제, 최근 학습 순 정렬 → [HOM 정책서](../policy/home) HOM-02·04·05 (검토 중)
- 자료 개수 상한, 휴지통, 내비게이션 형태 → HOM-07–10 (미결정)
