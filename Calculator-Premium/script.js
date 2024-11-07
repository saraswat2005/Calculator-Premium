// script.js
let memory = 0;
let currentInput = "";

// Update the display
function updateDisplay(value) {
  document.getElementById("calc-display").value = value || currentInput || "0";
}

// Add event listeners for each button
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    const action = e.target.getAttribute('data-action');
    const value = e.target.getAttribute('data-value');
    
    if (action === "clear") {
      currentInput = "";
    } else if (action === "calculate") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else if (action === "memory-plus") {
      memory += parseFloat(currentInput || "0");
    } else if (action === "memory-minus") {
      memory -= parseFloat(currentInput || "0");
    } else if (action === "memory-clear") {
      memory = 0;
    } else {
      currentInput += value;
    }
    
    updateDisplay();
  });
});
