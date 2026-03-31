const inputBox = document.getElementById("textInput");
const wordDisplay = document.getElementById("wordCount");
const charDisplay = document.getElementById("charCount");

inputBox.addEventListener("input", () => {
  const content = inputBox.value;

  // ❌ Sai: đếm từ bằng split(" ")
  const wordList = content.split(" ");
  const totalWords = wordList.length;
  wordDisplay.textContent = "Số từ: " + totalWords;

  // ✅ vẫn đúng
  const charsLeft = 200 - content.length;
  charDisplay.textContent = "Số ký tự còn lại: " + charsLeft;

  // ✅ vẫn đúng
  if (charsLeft <= 20) {
    charDisplay.classList.add("warning");
  } else {
    charDisplay.classList.remove("warning");
  }
});