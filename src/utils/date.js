export function displayCurrentDate(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      const currentDate = new Date();
      element.textContent = currentDate.toDateString(); // Format the date as a readable string
    }
  }
  
  export function resetDateDisplay(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = ''; // Clear the displayed date
    }
  }