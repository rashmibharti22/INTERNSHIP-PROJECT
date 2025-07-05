// Initialize counts in local storage
if (!localStorage.getItem('totalEnrolled')) {
  localStorage.setItem('totalEnrolled', '0');
}
if (!localStorage.getItem('totalPlaced')) {
  localStorage.setItem('totalPlaced', '0');
}

// Update stats on homepage
window.addEventListener('DOMContentLoaded', () => {
  const enrolled = document.getElementById('totalEnrolled');
  const placed = document.getElementById('totalPlaced');
  if (enrolled && placed) {
    enrolled.textContent = localStorage.getItem('totalEnrolled');
    placed.textContent = localStorage.getItem('totalPlaced');
  }
});

// Enroll button logic
function enrollStudent(company) {
  let count = parseInt(localStorage.getItem('totalEnrolled')) || 0;
  localStorage.setItem('totalEnrolled', count + 1);
  alert(`Enrolled for ${company}. Total enrolled: ${count + 1}`);
}
const registerBtn = document.getElementById("registerBtn");
const registrationForm = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

// Show the form when "Register" button is clicked
registerBtn.addEventListener("click", () => {
  registrationForm.classList.remove("hidden");
  registerBtn.classList.add("hidden"); // hide the button
});

// Handle form submission
registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  registrationForm.classList.add("hidden");
  successMessage.classList.remove("hidden");

  // Here you could store data or send to server
});
