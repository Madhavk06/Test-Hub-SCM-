// Hardcoded username and password
const hardcodedUsername = "testwise@gmail.com";
const hardcodedPassword = "12345";

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission reload

    // Get user details
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const termsChecked = document.getElementById('terms').checked;

    // Basic validation
    if (!termsChecked) {
        alert('Please accept the terms and conditions to continue.');
        return;
    }

    // Check hardcoded username and password
    if (email === hardcodedUsername && password === hardcodedPassword) {
        alert('Welcome back! Login successful.');
        // Redirect user (example: dashboard.html)
        window.location.href = 'getstarted.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Sign Up Button Action
document.getElementById('signUpBtn').addEventListener('click', function () {
    alert('Redirecting to sign-up page...');
    // Redirect to a signup page
    window.location.href = 'sign.html';
});
