# 계정·설정 화면

<div class="doc-info">
<span>화면 ID: SCR-ACC</span>
<span>정책: <a href="../policy/account">ACC 계정·설정 정책</a></span>
<span>와이어프레임: 1920×1080 설계서 보드 (낮은 완성도, 2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(PD) 로그인·회원가입·설정 참고 서비스를 정리해 주세요(ACC-02).</li><li>(전원) 소셜 로그인 제공사(ACC-03)와 회원가입 입력 항목(ACC-04)에 의견을 남겨 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 <a href="https://github.com/soohy00/ttadak-wiki/issues/new?title=%5B%EA%B3%84%EC%A0%95%C2%B7%EC%84%A4%EC%A0%95%20%ED%99%94%EB%A9%B4%5D%20" target="_blank">의견 남기기</a>로 남겨 주세요. 질문·피드백 방법은 4차 회의에서 확정해요.</p>
</div>

## 사용자 흐름

1. 0.3 로그인에서 소셜 계정으로 로그인한다. 처음이면 0.4 회원가입(닉네임·약관 동의)을 거친다.
2. 로그인 후 상단 바 프로필에서 0.5 설정으로 간다.

- 로그인·회원가입·설정은 [세부 경험 결정 원칙](../product/principles)에 따라 보편 패턴을 따릅니다. 참고 서비스는 PD가 정리해 붙입니다(ACC-02).

## 0.3 로그인 · SCR-ACC-01

<a href="/ttadak-wiki/screens/scr-new-0-3.png" target="_blank"><img class="scr" src="/screens/scr-new-0-3.png" alt="화면 0-3"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>안내 문구</b><span class="kind">Text</span>: 로그인이 필요한 이유를 한 줄로 알립니다. 진입한 곳에 따라 문구가 바뀝니다(예: 샘플 체험 뒤 "기록을 저장하려면 로그인하세요").</li>
<li><b>소셜 로그인</b><span class="kind">Button</span>: 소셜 계정으로만 로그인합니다. 이메일 가입은 두지 않습니다(보편 패턴 확인 필요).<ul><li>제공사는 [미결정]이며 카카오·구글·네이버는 예시입니다(ACC-03).</li><li>상태: default, hover, pressed, loading</li><li>→ 클릭할 경우 제공사 인증 창으로 이동합니다. 첫 로그인이면 0.4 회원가입, 아니면 진입 전 화면 또는 1.1 내 자료로 이동합니다.</li></ul></li>
<li><b>자동 가입 안내</b><span class="kind">Text</span>: 로그인과 가입을 한 화면에서 처리한다는 안내입니다.</li>
<li><b>약관 안내</b><span class="kind">Text</span>: 이용약관·개인정보 처리방침 링크입니다. 클릭 시 새 창으로 엽니다.</li>
</ol>

<p class="mk-note">정할 것: 소셜 로그인 제공사(ACC-03), PD 참고 서비스 정리 후 확정. 관련 정책: ACC-02·03</p>

## 0.4 회원가입 · SCR-ACC-01

<a href="/ttadak-wiki/screens/scr-new-0-4.png" target="_blank"><img class="scr" src="/screens/scr-new-0-4.png" alt="화면 0-4"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>화면 제목</b><span class="kind">Text</span>: 첫 소셜 로그인 직후 한 번만 노출되는 화면입니다.</li>
<li><b>닉네임</b><span class="kind">Text Field</span>: 소셜 계정의 이름으로 자동 입력됩니다. 2–12자 [기준: ?]<ul><li>상태: default, focus, filled, error</li></ul></li>
<li><b>약관 동의</b><span class="kind">Checkbox</span>: 전체 동의를 누르면 모든 항목이 선택됩니다. 항목을 하나라도 끄면 전체 동의가 해제됩니다.<ul><li>[보기]를 클릭할 경우 약관 전문을 모달로 엽니다.</li><li>상태: default, checked</li></ul></li>
<li><b>시작하기</b><span class="kind">Button</span>: [필수] 항목 2개에 동의하기 전에는 disabled 상태입니다.<ul><li>상태: disabled, default, hover, pressed, loading</li><li>→ 클릭할 경우 가입을 마치고 1.1 내 자료(처음이면 빈 화면)로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">정할 것: 입력 항목(닉네임 외 받을지), [선택] 항목 여부 → ACC-04, PD 참고 서비스 정리 후 확정</p>

## 0.5 설정 · SCR-ACC-02

<a href="/ttadak-wiki/screens/scr-new-0-5.png" target="_blank"><img class="scr" src="/screens/scr-new-0-5.png" alt="화면 0-5"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>설정 메뉴</b><span class="kind">Tab</span>: 계정 / 서비스 정보 2개입니다. 진입 시 계정이 선택된 상태입니다.<ul><li>상태: default, hover, selected</li></ul></li>
<li><b>로그인 방식</b><span class="kind">Text</span>: 가입한 소셜 제공사를 보여 줍니다. 바꿀 수 없습니다.</li>
<li><b>닉네임</b><span class="kind">Text Field</span>: 닉네임을 바꾸고 [저장]을 누르면 반영됩니다. 바꾼 내용이 없으면 [저장]은 disabled입니다.<ul><li>상태: default, focus, error</li><li>→ 저장되면 "닉네임을 바꿨어요" 토스트를 노출합니다.</li></ul></li>
<li><b>로그아웃</b><span class="kind">Button</span>: 상태: default, hover, pressed<ul><li>→ 클릭할 경우 로그아웃하고 0.1 시작 화면으로 이동합니다.</li></ul></li>
<li><b>회원 탈퇴</b><span class="kind">Text Button</span>: 눈에 덜 띄는 텍스트 버튼입니다.<ul><li>→ 클릭할 경우 "자료와 필사 기록이 모두 지워져요" 확인 모달을 띄우고, 확인하면 탈퇴 후 0.1로 이동합니다.</li></ul></li>
<li><b>서비스 정보</b><span class="kind">List</span>: 이용약관·개인정보 처리방침은 새 창, 문의하기는 [문의 채널: ?]로 연결합니다.</li>
</ol>

<p class="mk-note">정할 것: 메뉴 구성(ACC-05), 문의 채널. 1사이클에는 알림 설정을 두지 않습니다.</p>
