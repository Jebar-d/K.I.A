export function changeFontSize(elementId, action) {
    const element = document.getElementById(elementId);
    if (element) {
      const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
      if (action === 'increase') {
        element.style.fontSize = `${currentFontSize + 2}px`;
      } else if (action === 'decrease') {
        element.style.fontSize = `${currentFontSize - 2}px`;
      } else if (action === 'reset') {
        element.style.fontSize = ''; // Resets to the default font size
      }
    }
  }