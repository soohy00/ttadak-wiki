# 자료 업로드 화면

<div class="doc-info">
<span>화면 ID: SCR-UPL</span>
<span>정책: <a href="../policy/upload">UPL 자료 업로드 정책</a></span>
<span>와이어프레임: 1920×1080 설계서 보드 (낮은 완성도, 2026-11-23)</span>
</div>

<div class="todo-box">
<p class="todo-title">이 페이지에서 할 일</p>
<ol><li>(전원) 화면 문구가 두 줄(끌어다 놓기 사용법, 형식·용량)로 충분한지 확인해 주세요.</li><li>(PD) 세그먼트 탭과 업로드 영역 배치를 확인해 주세요.</li><li>(FE) 끌어다 놓기, 파일 검사, 여러 파일을 놓았을 때 처리가 구현 가능한지 확인해 주세요.</li><li>(전원) 2.2 오류 상황에 빠진 경우가 없는지 확인해 주세요.</li></ol>
<p class="todo-foot">확인한 뒤 <a href="https://github.com/soohy00/ttadak-wiki/issues/new?title=%5B%EC%9E%90%EB%A3%8C%20%EC%97%85%EB%A1%9C%EB%93%9C%20%ED%99%94%EB%A9%B4%5D%20" target="_blank">의견 남기기</a>로 남겨 주세요. 질문·피드백 방법은 4차 회의에서 확정해요.</p>
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

## 2.2 파일 선택됨 · 오류 · SCR-UPL-03

<a href="/ttadak-wiki/screens/scr-re-2-2.png" target="_blank"><img class="scr" src="/screens/scr-re-2-2.png" alt="화면 2-2"></a>
<p class="wf-cap">1920×1080 화면. 번호별 설명은 아래에 있어요. 이미지를 누르면 크게 열려요.</p>

<ol class="mk-list">
<li><b>파일 줄</b><span class="kind">List Item</span>: 선택한 파일의 이름·용량·쪽 수입니다. 올리는 중에는 진행 막대를 노출합니다.<ul><li>상태: 선택됨, 올리는 중</li><li>→ [바꾸기]를 클릭할 경우 업로드 영역으로 돌아갑니다.</li></ul></li>
<li><b>자료 이름</b><span class="kind">Text Field</span>: 파일 이름(확장자 제외)으로 자동 입력되며 수정할 수 있습니다.</li>
<li><b>오류 안내</b><span class="kind">Inline Alert</span>: 형식·용량·스캔 PDF·추출 실패 시 업로드 영역 바로 아래에 노출합니다. 새 파일을 고르면 사라집니다.<ul><li>문구 전체는 UPL 정책서 "예외·에러 메시지" 표를 따릅니다.</li></ul></li>
</ol>

<p class="mk-note">관련 정책: UPL-02·03·05·06·08·10·11·12·17</p>

## 애니메이션

- 드래그 중 업로드 영역 강조, 파일 줄 진행 막대 → Claude 아티팩트로 공유 예정
