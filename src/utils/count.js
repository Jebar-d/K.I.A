let counterValue = 0;

export function increaseCounter() {
  counterValue++;
  updateCounterDisplay();
}

export function decreaseCounter() {
  counterValue--;
  updateCounterDisplay();
}

export function resetCounter() {
  counterValue = 0;
  updateCounterDisplay();
}

function updateCounterDisplay() {
  const counterElement = document.getElementById('counter-value');
  if (counterElement) {
    counterElement.textContent = counterValue;
  }
}