const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  // Đếm từ
  let words = text.trim().split(/\s+/);
  let count = text.trim() === "" ? 0 : words.length;
  wordCount.textContent = "Số từ: " + count;

  // Đếm ký tự còn lại
  const remaining = 200 - text.length;
  charCount.textContent = "Số ký tự còn lại: " + remaining;

  // Cảnh báo
  if (remaining <= 20) {
    charCount.classList.add("warning");
  } else {
    charCount.classList.remove("warning");
  }
});