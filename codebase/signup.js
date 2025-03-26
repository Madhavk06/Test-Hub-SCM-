document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const termsChecked = document.getElementById('terms').checked;

    if (!termsChecked) {
        alert('Please accept the terms and conditions.');
        return;
    }

    alert(`Welcome, ${firstName} ${lastName}! Your account has been created successfully.`);
    window.location.href = 'login.html'; // Redirect after success
});
