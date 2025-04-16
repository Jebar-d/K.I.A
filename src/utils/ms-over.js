export function changeTextColorOnHover(elementId, hoverColor, defaultColor) {
    const element = document.getElementById(elementId);
    if (element) {
      console.log(`Element with id "${elementId}" found.`);
      // Add mouseover event to change text color
      element.addEventListener('mouseover', () => {
        console.log('Mouse over event triggered');
        element.style.color = hoverColor;
      });
  
      // Add mouseout event to reset text color
      element.addEventListener('mouseout', () => {
        console.log('Mouse out event triggered');
        element.style.color = defaultColor;
      });
    } else {
      console.error(`Element with id "${elementId}" not found.`);
    }
  }