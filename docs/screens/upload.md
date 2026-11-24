# 자료 업로드 화면

<div class="doc-info">
<span>화면 ID: SCR-UPL</span>
<span>정책: <a href="../policy/upload">UPL 자료 업로드 정책</a></span>
<span>와이어프레임: 1920×1080 설계서 보드 (2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 화면 문구가 필요한 것만 남았는지 확인해 주세요(화면 설계 기준 8. 화면 문구).</li><li>(PD) 세그먼트 탭과 업로드 영역 배치를 확인해 주세요.</li><li>(FE) 끌어다 놓기, 파일 검사, 여러 파일을 놓았을 때 처리가 구현 가능한지 확인해 주세요.</li><li>(전원) 2.2.2 오류 상황에 빠진 경우가 없는지 확인해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 페이지 맨 아래 <a href="#comments">댓글</a>로 남겨 주세요(GitHub 로그인).</p>
</div>

## 사용자 흐름

1. 자료 넣기 화면에서 파일을 끌어다 놓거나 고른다. 또는 텍스트 붙여넣기 탭에서 텍스트를 붙여넣는다. (UPL-09)
2. 고른 파일은 바로 형식·용량을 검사한다. 통과하면 파일 줄과 자료 이름이 보인다. (UPL-05·11)
3. '회차 나누기'를 누르면 텍스트를 추출하고 [회차 구분 화면](./session-split)으로 이동한다. (UPL-07)

- 화면 안 문구는 써 보기 전에는 모를 사용법(끌어다 놓기)과 형식·용량 한 줄만 둡니다. 예외 안내는 그 상황이 생겼을 때만 보여 줍니다.
- 와이어프레임은 배치와 상태만 정합니다. 색·글꼴·간격은 디자이너의 파운데이션을 따릅니다.
- 이 화면의 배치는 보편 패턴을 따릅니다([결정 원칙](../product/principles)). 근거 레퍼런스는 노션 시안 카드에 있습니다.

## 2.1.1 자료 넣기 · 파일 · SCR-UPL-01

<a href="/ttadak-wiki/screens/scr-hf-2-1-1.png" target="_blank"><img class="scr" src="/screens/scr-hf-2-1-1.png" alt="화면 2-1-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>자료 넣는 방법</b><span class="kind">Segmented Tab</span>: 파일 / 텍스트 2개. 진입 시 파일이 선택된 상태입니다. 탭을 바꿔도 각 탭의 입력은 유지됩니다.<ul><li>상태: default, selected</li></ul></li>
<li><b>업로드 영역</b><span class="kind">Drop Zone</span>: 파일을 끌어다 놓으면 형식·용량 검사를 시작합니다. 영역 아무 곳이나 클릭해도 파일 선택 창이 열립니다.<ul><li>파일을 2개 이상 놓으면 첫 파일만 받고 "한 번에 하나씩 올릴 수 있어요" 토스트를 노출합니다.</li><li>상태: default, drag over(테두리 실선·배경 진하게), 검사 중, error</li><li>→ 검사를 통과하면 2.2 파일 선택됨 상태로 바뀝니다.</li></ul></li>
<li><b>파일 선택</b><span class="kind">Button</span>: OS 파일 선택 창을 엽니다. PDF·DOCX·TXT·MD 파일만 보입니다.<ul><li>상태: default, hover, pressed</li></ul></li>
<li><b>형식·용량</b><span class="kind">Caption</span>: 받는 형식과 최대 용량을 한 줄로 노출합니다.<ul><li>PPT·한글(hwp) 안내는 미리 쓰지 않고, 해당 파일을 올렸을 때 오류 문구로 안내합니다(2.2).</li></ul></li>
<li><b>회차 나누기</b><span class="kind">Button</span>: 파일이 선택되기 전에는 disabled입니다.<ul><li>상태: disabled, default, hover, pressed, loading</li><li>→ 클릭할 경우 3.1 회차 나누는 중으로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">레퍼런스: 구글 번역 문서 탭, Smallpdf, iLovePDF, TinyPNG, 브루. 관련 정책: UPL-01·03·05·06·09·10·17</p>

## 2.1.2 자료 넣기 · 텍스트 · SCR-UPL-02

<a href="/ttadak-wiki/screens/scr-hf-2-1-2.png" target="_blank"><img class="scr" src="/screens/scr-hf-2-1-2.png" alt="화면 2-1-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>텍스트 입력</b><span class="kind">Text Area</span>: 진입 시 커서가 들어간 상태입니다. placeholder "외울 내용을 붙여넣으세요"<ul><li>상태: default, focus, filled, error</li></ul></li>
<li><b>글자 수</b><span class="kind">Counter</span>: 입력할 때마다 갱신합니다. 최대 글자 수를 넘으면 "최대 N자까지 넣을 수 있어요"로 바뀝니다(UPL-15, AI 모델 결정 후).</li>
<li><b>자료 이름</b><span class="kind">Text Field</span>: 첫 줄 앞 30자로 자동 입력되며 수정할 수 있습니다. 최대 30자.<ul><li>상태: default, focus, filled</li></ul></li>
<li><b>회차 나누기</b><span class="kind">Button</span>: 입력이 없으면 disabled입니다.<ul><li>상태: disabled, default, hover, pressed, loading</li><li>→ 클릭할 경우 줄바꿈·공백을 정리하고 3.1 회차 나누는 중으로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">레퍼런스: 구글 번역 텍스트, 뤼튼. 관련 정책: UPL-01·09·11·13·15</p>

## 2.2.1 파일 선택됨 · SCR-UPL-03

<a href="/ttadak-wiki/screens/scr-hf-2-2-1.png" target="_blank"><img class="scr" src="/screens/scr-hf-2-2-1.png" alt="화면 2-2-1"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>파일 줄</b><span class="kind">List Item</span>: 고른 파일의 이름·용량·쪽 수를 보여 줍니다. 올리는 동안에는 오른쪽에 진행 막대를 노출합니다.<ul><li>상태: 올리는 중, 선택됨</li><li>→ [바꾸기]를 클릭할 경우 2.1.1 업로드 영역으로 돌아갑니다.</li></ul></li>
<li><b>자료 이름</b><span class="kind">Text Field</span>: 파일 이름(확장자 제외)으로 자동 입력됩니다. 1–30자.<ul><li>상태: default, focus, filled, error</li></ul></li>
<li><b>회차 나누기</b><span class="kind">Button</span>: 화면의 주 버튼입니다.<ul><li>상태: default, hover, pressed, loading</li><li>→ 클릭할 경우 글자를 읽고 3.1 회차 나누는 중으로 이동합니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: UPL-03·05·07·11</p>

## 2.2.2 오류 · SCR-UPL-03

<a href="/ttadak-wiki/screens/scr-hf-2-2-2.png" target="_blank"><img class="scr" src="/screens/scr-hf-2-2-2.png" alt="화면 2-2-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>업로드 영역</b><span class="kind">Drop Zone</span>: 검사에 실패하면 테두리를 진하게 바꾸고 바로 다른 파일을 받을 수 있게 둡니다.<ul><li>상태: error</li></ul></li>
<li><b>오류 안내</b><span class="kind">Inline Alert</span>: 제목은 무엇을 못 했는지, 본문은 어떻게 하면 되는지 한 줄씩 씁니다. 새 파일을 고르면 사라집니다.<ul><li>20MB 초과: "파일이 너무 커요" / "한 번에 20MB까지 올릴 수 있어요."</li><li>받지 않는 형식: "이 형식은 올릴 수 없어요" / "txt·md·docx 파일과 글자로 된 PDF만 올릴 수 있어요."</li><li>PPT·hwp: "PPT는 바로 올릴 수 없어요" / "PDF로 저장한 뒤 올려 주세요."</li><li>스캔 PDF: 화면 예시</li><li>추출 실패: "글자를 읽지 못했어요" / "파일을 다시 올려 주세요."</li></ul></li>
<li><b>회차 나누기</b><span class="kind">Button</span>: 오류 상태에서는 disabled입니다.</li>
</ol>

<p class="mk-note">관련 정책: UPL-01·02·03·06·08·12·17. 문구는 UPL 정책서 "예외·에러 메시지"와 맞춥니다.</p>

## 애니메이션

- 드래그 중 업로드 영역 강조, 파일 줄 진행 막대 → Claude 아티팩트로 공유 예정
