# 진입 화면

<div class="doc-info">
<span>화면 ID: SCR-ENT</span>
<span>정책: <a href="../policy/account">ACC 계정·설정 정책</a> (ACC-01)</span>
<span>와이어프레임: 1920×1080 설계서 보드 (2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 0.1 시작 화면이 필요한지, 샘플 체험으로 바로 보내도 되는지 의견을 남겨 주세요.</li><li>(PD) 핵심 문구와 미리 보기 자리 구성을 확인해 주세요.</li><li>(전원) 샘플 체험 중 로그인을 언제 권할지 정해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 <a href="https://github.com/soohy00/ttadak-wiki/issues/new?title=%5B%EC%A7%84%EC%9E%85%20%ED%99%94%EB%A9%B4%5D%20" target="_blank">의견 남기기</a>로 남겨 주세요. 질문·피드백 방법은 4차 회의에서 확정해요.</p>
</div>

## 사용자 흐름

1. 로그인하지 않은 사람은 0.1 시작 화면을 본다.
2. "샘플로 체험하기"를 누르면 0.2 샘플 체험에서 필사 화면(4.1–4.6)을 샘플 자료로 써 본다. 기록은 저장하지 않는다.
3. 저장하거나 내 자료를 넣으려면 [로그인](./account)한다.

## 0.1 시작 화면 · SCR-ENT-01

<a href="/ttadak-wiki/screens/scr-hf-0-1.png" target="_blank"><img class="scr" src="/screens/scr-hf-0-1.png" alt="화면 0-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>로그인</b><span class="kind">Button</span>: 로그인하지 않은 사용자에게만 보입니다.<ul><li>→ 클릭할 경우 0.3 로그인으로 이동합니다.</li></ul></li>
<li><b>핵심 문구</b><span class="kind">Display Text</span>: 서비스가 하는 일을 한 문장으로. 문구는 4차 회의의 한 줄 문구 결정을 따릅니다.</li>
<li><b>샘플로 체험하기</b><span class="kind">Button</span>: 화면의 주 버튼입니다. 로그인 없이 샘플로 필사를 체험합니다(ACC-01).<ul><li>→ 클릭할 경우 0.2 샘플 체험으로 이동합니다.</li></ul></li>
<li><b>내 자료로 시작하기</b><span class="kind">Button</span>: 자료를 넣으려면 로그인이 필요합니다(UPL-14).<ul><li>→ 클릭할 경우 0.3 로그인 후 2.1 자료 넣기로 이동합니다.</li></ul></li>
<li><b>미리 보기</b><span class="kind">Image</span>: 필사 화면(4.2)을 줄여 보여 줍니다. 움직임 여부는 디자인에서 정합니다.</li>
<li><b>사용 방법</b><span class="kind">Card</span>: 3단계를 카드 3개로 보여 줍니다. 누를 수 없는 안내 카드입니다.</li>
</ol>

<p class="mk-note">정할 것: 이 화면이 필요한지(샘플 체험으로 바로 보낼지), 핵심 문구. 관련 정책: ACC-01, UPL-14</p>

## 0.2 샘플 체험 · SCR-ENT-02

<a href="/ttadak-wiki/screens/scr-hf-0-2.png" target="_blank"><img class="scr" src="/screens/scr-hf-0-2.png" alt="화면 0-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>체험 안내 띠</b><span class="kind">Banner</span>: 샘플 체험 중이며 기록이 저장되지 않는다는 것을 알립니다. 스크롤해도 상단에 고정됩니다.<ul><li>→ 버튼을 클릭할 경우 0.3 로그인으로 이동합니다.</li></ul></li>
<li><b>샘플 자료 이름</b><span class="kind">Title</span>: 샘플 세트 이름·회차 수·글자 수. 샘플 내용은 [미결정]입니다.</li>
<li><b>회차 줄</b><span class="kind">List Item</span>: 4.1과 같은 부품입니다. 기록은 저장하지 않습니다.<ul><li>→ 클릭할 경우 4.2 따라 쓰기로 이동합니다(샘플). 한 단계를 마치면 4.6에서 로그인을 권합니다.</li></ul></li>
</ol>

<p class="mk-note">정할 것: 샘플 세트 내용, 로그인 권유 시점. 관련 정책: ACC-01</p>

## 정할 것

- 0.1 시작 화면이 필요한지 (샘플 체험으로 바로 보낼지)
- 샘플 세트 내용, 로그인을 유도하는 시점
