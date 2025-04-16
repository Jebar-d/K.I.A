export function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      // Toggle the visibility of the element
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
  }