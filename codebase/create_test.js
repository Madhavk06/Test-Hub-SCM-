document.getElementById("create-test-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Collect form data
  const title = document.getElementById("test-title").value.trim();
  const description = document.getElementById("test-description").value.trim();
  const date = document.getElementById("test-date").value.trim();
  const duration = document.getElementById("test-duration").value.trim();
  const questions = document.getElementById("test-questions").value.trim();
  const type = document.getElementById("test-type").value;

  // Display confirmation message
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.style.display = "block";
  confirmationMessage.textContent = `Test "${title}" created successfully with ${questions} questions!`;

  // Clear form fields
  document.getElementById("create-test-form").reset();
});
