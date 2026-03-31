const inputBox = document.getElementById("textInput");
const wordDisplay = document.getElementById("wordCount");
const charDisplay = document.getElementById("charCount");

inputBox.addEventListener("input", () => {
  const content = inputBox.value;

  // Đếm từ
  const wordList = content.trim().split(/\s+/);
  const totalWords = content.trim() === "" ? 0 : wordList.length;
  wordDisplay.textContent = "Số từ: " + totalWords;

  // Đếm ký tự còn lại
  const charsLeft = 200 - content.length;
  charDisplay.textContent = "Số ký tự còn lại: " + charsLeft;

  // Cảnh báo
  if (charsLeft <= 20) {
    charDisplay.classList.add("warning");
  } else {
    charDisplay.classList.remove("warning");
  }
});