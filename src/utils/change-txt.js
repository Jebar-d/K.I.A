let originalText = '';

export function changeText(newText) {
  const textElement = document.getElementById('text-to-change');
  if (textElement) {
    if (!originalText) {
      // Store the original text the first time
      originalText = textElement.textContent;
    }
    // Toggle between the new text and the original text
    textElement.textContent = textElement.textContent === newText ? originalText : newText;
  }
}