import { updateOriginalBackgroundColor } from './cn-bg.js';

const darkMode = () => {
  const themeToggleBtn = document.getElementById('theme-toggle');

  // State
  const savedTheme = localStorage.getItem('theme');

  // On mount: Apply the saved theme
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    updateOriginalBackgroundColor(); // Update the background color for the saved theme
  }

  // Handlers
  const handleThemeToggle = () => {
    if (document.body.classList.contains('light-mode')) {
      // Switch to dark mode
      document.body.classList.remove('light-mode');
      localStorage.removeItem('theme'); // Remove saved theme
    } else {
      // Switch to light mode
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode'); // Save theme
    }
    updateOriginalBackgroundColor(); // Update the background color for the new mode
  };

  // Event listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', handleThemeToggle);
  }
};

export default darkMode;