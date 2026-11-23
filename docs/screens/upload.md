# 자료 업로드 화면

<div class="doc-info">
<span>화면 ID: SCR-UPL</span>
<span>정책: <a href="../policy/upload">UPL 자료 업로드 정책</a></span>
<span>와이어프레임: 1사이클 시안 (무채색, 2026-11-23)</span>
</div>

## 사용자 흐름

1. 자료 넣기 화면에서 파일을 끌어다 놓거나 고른다. 또는 텍스트 붙여넣기 탭에서 텍스트를 붙여넣는다. (UPL-09)
2. 고른 파일은 바로 형식·용량을 검사한다. 통과하면 파일 줄과 자료 이름이 보인다. (UPL-05·11)
3. '회차 나누기'를 누르면 텍스트를 추출하고 [회차 구분 화면](./session-split)으로 이동한다. (UPL-07)

- 와이어프레임은 배치와 상태만 정합니다. 색·글꼴·간격은 디자이너의 파운데이션을 따릅니다.
- 이 화면의 배치는 보편 패턴을 따릅니다([결정 원칙](../product/principles)). 근거 레퍼런스는 노션 시안 카드에 있습니다.

## SCR-UPL-01 자료 넣기 · 파일 올리기

<div class="wf">
  <div class="wf-bar"><b>따닥</b><span>내 자료</span><span class="sp"></span><span class="wf-dot"></span></div>
  <div class="wf-body">
    <p class="wf-h"><i class="wf-n">1</i>외울 자료 넣기</p>
    <p class="wf-sub">자료를 넣으면 AI가 한 번에 공부할 회차로 나눠 드려요.</p>
    <div class="wf-tabs"><span class="wf-tab on"><i class="wf-n">2</i>파일 올리기</span><span class="wf-tab">텍스트 붙여넣기</span></div>
    <div class="wf-drop"><i class="wf-n">3</i>
      <div class="wf-ico">↑</div>
      <p>여기에 파일을 끌어다 놓거나</p>
      <span class="wf-btn sm ghost"><i class="wf-n">4</i>파일 고르기</span>
      <p class="wf-muted"><i class="wf-n">5</i>txt · md · docx · 글자로 된 PDF · 최대 20MB</p>
      <p class="wf-muted">PPT·한글(hwp) 파일은 PDF로 저장한 뒤 올려 주세요.</p>
    </div>
    <div class="wf-foot"><span class="wf-btn off"><i class="wf-n">6</i>회차 나누기</span></div>
  </div>
</div>
<p class="wf-cap">처음 들어온 상태. 파일을 끌어 오면 업로드 영역이 진해집니다(드래그 중).</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 제목·설명 | — | — | — |
| 2 | 탭 | 파일 올리기 / 텍스트 붙여넣기 전환. 전환해도 입력한 내용은 탭마다 유지 | 파일 올리기(기본) / 텍스트 붙여넣기 | UPL-09 |
| 3 | 업로드 영역 | 파일을 끌어다 놓으면 검사 시작. 영역 아무 곳이나 눌러도 파일 고르기 | 기본 / 드래그 중 / 검사 중 | UPL-05·10 |
| 4 | 파일 고르기 버튼 | 파일 선택 창 열기(받는 형식만 보이게) | 기본 | UPL-01 |
| 5 | 받는 형식·용량 안내 | 항상 표시. PPT·hwp는 PDF로 저장하라고 안내 | — | UPL-01·03·06·17 |
| 6 | 회차 나누기 버튼 | 누르면 추출 시작 | 비활성(파일 없음) / 활성 / 진행 중 | UPL-05·07 |

## SCR-UPL-02 자료 넣기 · 텍스트 붙여넣기

<div class="wf">
  <div class="wf-bar"><b>따닥</b><span>내 자료</span><span class="sp"></span><span class="wf-dot"></span></div>
  <div class="wf-body">
    <p class="wf-h">외울 자료 넣기</p>
    <p class="wf-sub">자료를 넣으면 AI가 한 번에 공부할 회차로 나눠 드려요.</p>
    <div class="wf-tabs"><span class="wf-tab">파일 올리기</span><span class="wf-tab on">텍스트 붙여넣기</span></div>
    <div class="wf-input wf-area"><i class="wf-n">1</i>조선 전기의 정치 제도는 의정부와 6조를 중심으로…<br>…</div>
    <p class="wf-muted" style="text-align:right;margin-top:4px"><i class="wf-n">2</i>3,420자</p>
    <span class="wf-label"><i class="wf-n">3</i>자료 이름</span>
    <div class="wf-input">조선 전기의 정치 제도는 의정부와 6조를…</div>
    <div class="wf-foot"><span class="wf-btn"><i class="wf-n">4</i>회차 나누기</span></div>
  </div>
</div>
<p class="wf-cap">텍스트를 붙여넣은 상태. 자료 이름은 첫 줄 앞 30자로 채워집니다.</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 텍스트 입력 칸 | 붙여넣기·직접 입력 | 비어 있음 / 입력됨 | UPL-01·09 |
| 2 | 글자 수 | 입력할 때마다 갱신. 최대 글자 수를 넘으면 안내 | 기본 / 초과 | UPL-15 |
| 3 | 자료 이름 | 첫 줄 앞 30자로 자동 입력, 수정 가능 | 자동 / 수정됨 | UPL-11 |
| 4 | 회차 나누기 버튼 | 누르면 텍스트 정리 후 회차 나누기 시작 | 비활성(입력 없음) / 활성 / 진행 중 | UPL-07·13 |

## SCR-UPL-03 파일 선택됨 · 오류

<div class="wf">
  <div class="wf-bar"><b>따닥</b><span>내 자료</span><span class="sp"></span><span class="wf-dot"></span></div>
  <div class="wf-body">
    <p class="wf-h">외울 자료 넣기</p>
    <div class="wf-tabs"><span class="wf-tab on">파일 올리기</span><span class="wf-tab">텍스트 붙여넣기</span></div>
    <div class="wf-file"><i class="wf-n">1</i><span class="wf-ico" style="width:28px;height:28px;font-size:11px">PDF</span><span class="sp">한국사_요약노트.pdf<br><span class="wf-muted">3.2MB · 42쪽</span></span><span class="wf-muted">바꾸기 ×</span></div>
    <span class="wf-label"><i class="wf-n">2</i>자료 이름</span>
    <div class="wf-input">한국사_요약노트</div>
    <div class="wf-foot"><span class="wf-btn">회차 나누기</span></div>
    <hr style="border:0;border-top:1px dashed #d4d4d8;margin:20px 0">
    <p class="wf-muted">오류가 난 경우</p>
    <div class="wf-drop" style="padding:18px 16px"><div class="wf-ico">↑</div><p>여기에 파일을 끌어다 놓거나</p><span class="wf-btn sm ghost">파일 고르기</span></div>
    <div class="wf-err"><i class="wf-n">3</i>스캔한 PDF는 아직 올릴 수 없어요. 글자로 된 PDF를 올려 주세요.</div>
  </div>
</div>
<p class="wf-cap">위: 검사를 통과한 파일. 아래: 검사·추출에서 오류가 난 경우(업로드 영역 바로 아래에 안내).</p>

| 번호 | 요소 | 액션 | 상태 | 정책 |
| --- | --- | --- | --- | --- |
| 1 | 파일 줄 | 파일 이름·용량·쪽 수 표시. '바꾸기'를 누르면 업로드 영역으로 돌아감 | 선택됨 / 올리는 중(진행 막대) | UPL-05·10 |
| 2 | 자료 이름 | 파일 이름(확장자 제외)으로 자동 입력, 수정 가능 | 자동 / 수정됨 | UPL-11 |
| 3 | 오류 안내 | 형식·용량·스캔 PDF·추출 실패 시 표시. 새 파일을 고르면 사라짐 | 숨김 / 표시 | UPL-02·03·06·08·10·12·17 |

## 애니메이션

- 드래그 중 업로드 영역 강조, 파일 줄 진행 막대 → Claude 아티팩트로 공유 예정
