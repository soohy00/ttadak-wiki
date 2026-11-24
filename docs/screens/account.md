# 계정·설정 화면

<div class="doc-info">
<span>화면 ID: SCR-ACC</span>
<span>정책: <a href="../policy/account">ACC 계정·설정 정책</a></span>
<span>와이어프레임: 1920×1080 설계서 보드 (2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(PD) 로그인·회원가입·설정 참고 서비스를 정리해 주세요(ACC-02).</li><li>(전원) 회원가입 입력 항목(ACC-04)에 의견을 남겨 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 <a href="https://github.com/soohy00/ttadak-wiki/issues/new?title=%5B%EA%B3%84%EC%A0%95%C2%B7%EC%84%A4%EC%A0%95%20%ED%99%94%EB%A9%B4%5D%20" target="_blank">의견 남기기</a>로 남겨 주세요. 질문·피드백 방법은 4차 회의에서 확정해요.</p>
</div>

## 사용자 흐름

1. 0.3 로그인에서 Google 계정으로 로그인한다. 처음이면 0.4 회원가입(닉네임·약관 동의)을 거친다.
2. 로그인 후 상단 바 프로필에서 0.5 설정으로 간다.

- 로그인·회원가입·설정은 [세부 경험 결정 원칙](../product/principles)에 따라 보편 패턴을 따릅니다. 참고 서비스는 PD가 정리해 붙입니다(ACC-02).

## 0.3 로그인 · SCR-ACC-01

<a href="/ttadak-wiki/screens/scr-hf-0-3.png" target="_blank"><img class="scr" src="/screens/scr-hf-0-3.png" alt="화면 0-3"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>가입 안내</b><span class="kind">Caption</span>: 로그인과 가입을 한 화면에서 처리한다는 것을 알립니다. 진입한 곳에 따라 "기록을 저장하려면 로그인하세요"로 바뀝니다.</li>
<li><b>Google 로그인</b><span class="kind">Button</span>: Google 계정으로만 로그인합니다. 다른 소셜 로그인·이메일 가입은 두지 않습니다(ACC-03).<ul><li>상태: default, hover, pressed, loading</li><li>→ 첫 로그인이면 0.4 회원가입, 아니면 진입 전 화면 또는 1.1로 이동합니다.</li></ul></li>
<li><b>약관 안내</b><span class="kind">Caption</span>: 이용약관·개인정보 처리방침 링크는 새 창으로 엽니다.</li>
</ol>

<p class="mk-note">관련 정책: ACC-02·03</p>

## 0.4 회원가입 · SCR-ACC-01

<a href="/ttadak-wiki/screens/scr-hf-0-4.png" target="_blank"><img class="scr" src="/screens/scr-hf-0-4.png" alt="화면 0-4"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>닉네임</b><span class="kind">Text Field</span>: Google 계정 이름으로 자동 입력됩니다. 2–12자 [기준: ?]<ul><li>상태: default, focus, filled, error</li></ul></li>
<li><b>약관 동의</b><span class="kind">Checkbox</span>: 전체 동의를 누르면 모두 선택됩니다. 하나라도 끄면 전체 동의가 해제됩니다. [보기]는 전문을 모달로 엽니다.</li>
<li><b>시작하기</b><span class="kind">Button</span>: [필수] 2개에 동의하기 전에는 disabled입니다.<ul><li>상태: disabled, default, hover, pressed, loading</li><li>→ 클릭할 경우 가입을 마치고 1.1.2 내 자료(빈 화면)로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">정할 것: 닉네임 외 입력 항목, [선택] 항목 여부(ACC-04). 관련 정책: ACC-04</p>

## 0.5 설정 · SCR-ACC-02

<a href="/ttadak-wiki/screens/scr-hf-0-5.png" target="_blank"><img class="scr" src="/screens/scr-hf-0-5.png" alt="화면 0-5"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>설정 메뉴</b><span class="kind">Tab</span>: 계정 / 서비스 정보. 진입 시 계정이 선택된 상태입니다.<ul><li>상태: default, selected</li></ul></li>
<li><b>로그인 방식</b><span class="kind">Text</span>: Google입니다. 바꿀 수 없습니다.</li>
<li><b>닉네임 저장</b><span class="kind">Button</span>: 바꾼 내용이 없으면 disabled입니다.<ul><li>→ 저장되면 "닉네임을 바꿨어요" 토스트를 노출합니다.</li></ul></li>
<li><b>로그아웃</b><span class="kind">Button</span>: 상태: default, hover, pressed<ul><li>→ 클릭할 경우 0.1 시작 화면으로 이동합니다.</li></ul></li>
<li><b>회원 탈퇴</b><span class="kind">Text Button</span>: 눈에 덜 띄게 둡니다.<ul><li>→ "자료와 필사 기록이 모두 지워져요" 모달을 거쳐 탈퇴 후 0.1로 이동합니다.</li></ul></li>
<li><b>서비스 정보</b><span class="kind">List</span>: 약관은 새 창, 문의하기는 [문의 채널: ?]로 연결합니다.</li>
</ol>

<p class="mk-note">정할 것: 메뉴 구성(ACC-05), 문의 채널. 1사이클에는 알림 설정을 두지 않습니다.</p>
