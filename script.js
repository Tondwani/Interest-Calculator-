// Dynamically populate the years dropdown
document.addEventListener("DOMContentLoaded", () => {
  const yearsDropdown = document.getElementById("years");
  for (let i = 1; i <= 30; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      yearsDropdown.appendChild(option);
  }
});

// Update Slider Value
function updateSliderValue() {
  const rate = document.getElementById("rate").value;
  document.getElementById("sliderValue").innerText = rate + "%";
}

// Simple Interest Calculation
function computeSimpleInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  
  if (!principal || principal <= 0) {
      alert("Please enter a valid positive principal amount.");
      return;
  }

  const interest = (principal * rate * years) / 100;
  const newYear = new Date().getFullYear() + years;

  displayResult(`If you deposit <mark>${principal}</mark>,<br>
      at an interest rate of <mark>${rate}%</mark>,<br>
      You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>
      in the year <mark>${newYear}</mark>.`);
}

// Compound Interest Calculation
function computeCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  const frequency = document.getElementById("compounding").value;
  
  if (!principal || principal <= 0) {
      alert("Please enter a valid positive principal amount.");
      return;
  }

  const n = { "Annually": 1, "Semi-Annually": 2, "Quarterly": 4, "Monthly": 12 }[frequency];
  const compoundInterest = principal * Math.pow(1 + rate / (100 * n), n * years);

  displayResult(`With compound interest:<br>
      You will receive an amount of <mark>${compoundInterest.toFixed(2)}</mark>.`);
}

// Display Results
function displayResult(message) {
  document.getElementById("result").innerHTML = message;
}

// Download Results as PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Interest Calculation Results", 10, 10);
  doc.text(document.getElementById("result").innerText, 10, 20);
  doc.save("InterestResults.pdf");
}

// Slider Value for Simple Interest
function rangeReader() {
  const rate_of_interest = document.getElementById("rate").value;
  document.getElementById("sliderValue").innerText = rate_of_interest + "%";
}
