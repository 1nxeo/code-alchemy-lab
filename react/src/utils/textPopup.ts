const textarea = document.getElementById("yourTextareaId");
const cursorElement = document.createElement("span");
cursorElement.style.position = "absolute";

// 텍스트 영역에 가상의 커서 요소 삽입
textarea.parentNode.appendChild(cursorElement);

// 커서 요소의 위치를 텍스트 커서의 위치에 맞게 조정
const updateCursorPosition = () => {
  const rect = textarea.getBoundingClientRect();
  const offsetLeft = rect.left + window.pageXOffset;
  const offsetTop = rect.top + window.pageYOffset;

  const cursorPositionX = offsetLeft + textarea?.selectionStart;
  const cursorPositionY = offsetTop;

  cursorElement.style.left = `${cursorPositionX}px`;
  cursorElement.style.top = `${cursorPositionY}px`;
};

// const textarea = document.getElementById(
//   "yourTextareaId"
// ) as HTMLTextAreaElement;
// const selectionStart = textarea.selectionStart;
// const selectionEnd = textarea.selectionEnd;

// 커서 위치는 selectionStart와 selectionEnd 사이의 중간 지점으로 추정할 수 있습니다.
const cursorPosition = (selectionStart + selectionEnd) / 2;

// 페이지 로드 시와 텍스트 영역의 내용이 변경될 때마다 커서 위치 업데이트
window.addEventListener("load", updateCursorPosition);
textarea.addEventListener("input", updateCursorPosition);
