document.addEventListener("DOMContentLoaded", () => {
  // Profile form submission
  const profileForm = document.getElementById("profile-form");
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    alert(`Profile updated:\nUsername: ${username}\nEmail: ${email}`);
    profileForm.reset();
  });

  // Password form submission
  const passwordForm = document.getElementById("password-form");
  passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
    } else {
      alert("Password changed successfully!");
      passwordForm.reset();
    }
  });

  // Save preferences
  const savePreferencesButton = document.getElementById("save-preferences");
  savePreferencesButton.addEventListener("click", () => {
    const notifications = document.getElementById("notifications").checked;
    const darkMode = document.getElementById("dark-mode").checked;
    alert(`Preferences saved:\nNotifications: ${notifications}\nDark Mode: ${darkMode}`);
  });
});
