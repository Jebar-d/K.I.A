let originalBackgroundColor = '';

export function changeBackgroundColor(color) {
  if (!originalBackgroundColor) {
    // Store the original background color the first time
    originalBackgroundColor = getComputedStyle(document.body).backgroundColor || 'white';
  }

  // Apply the new background color
  document.body.style.backgroundColor = color;
}

export function resetBackgroundColor() {
  // Clear inline styles to restore the original background color or dark mode styles
  document.body.style.backgroundColor = '';

  // If in light mode, restore the original background color
  if (document.body.classList.contains('light-mode')) {
    document.body.style.backgroundColor = originalBackgroundColor;
  }
}

export function updateOriginalBackgroundColor() {
  // Update the original background color based on the current mode
  if (document.body.classList.contains('light-mode')) {
    originalBackgroundColor = getComputedStyle(document.body).backgroundColor || 'white';
  } else {
    // Clear the original background color for dark mode
    originalBackgroundColor = '';
    document.body.style.backgroundColor = ''; // Ensure inline styles are cleared for dark mode
  }
}