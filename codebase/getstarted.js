// JavaScript for handling button functionality
document.addEventListener("DOMContentLoaded", () => {

  // Add event listeners for sidebar links
  document.getElementById("my-tests").addEventListener("click", () => {
      alert("Navigating to 'My Tests' page.");
      window.location.href = "my-tests.html";
  });

  document.getElementById("results").addEventListener("click", () => {
      alert("Viewing test results.");
      window.location.href = "results.html";
  });

  document.getElementById("settings").addEventListener("click", () => {
      alert("Navigating to 'Settings' page.");
      window.location.href = "settings.html";
  });

  // Add event listeners for dashboard buttons
  document.getElementById("create-test").addEventListener("click", () => {
      alert("Redirecting to the 'Create New Test' page.");
      window.location.href = "create-test.html";
  });

  document.getElementById("view-active-tests").addEventListener("click", () => {
      alert("Viewing active tests.");
      window.location.href = "active-tests.html";
  });

  document.getElementById("view-analytics").addEventListener("click", () => {
      alert("Redirecting to analytics.");
      window.location.href = "analytics.html";
  });

  // Example dynamic stats updates
  document.getElementById("active-tests").textContent = "5";
  document.getElementById("total-tests").textContent = "15";
  document.getElementById("completed-tests").textContent = "10";
  document.getElementById("users").textContent = "50";
});
