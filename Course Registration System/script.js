document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Reset error messages
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(errorMessage) {
    errorMessage.textContent = '';
  });

  // Get form values
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm_password').value;

  // Validate name
  if (name === '') {
    document.getElementById('name-error').textContent = 'Name is required';
    return;
  }

  // Validate email
  if (email === '') {
    document.getElementById('email-error').textContent = 'Email is required';
    return;
  } else if (!isValidEmail(email)) {
    document.getElementById('email-error').textContent = 'Invalid email format';
    return;
  }

  // Validate password
  if (password === '') {
    document.getElementById('password-error').textContent = 'Password is required';
    return;
  } else if (password.length < 6) {
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters long';
    return;
  }

  // Validate confirm password
  if (confirmPassword === '') {
    document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
    return;
  } else if (password !== confirmPassword) {
    document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
    return;
  }

  // If all validations pass, submit the form
  // You can perform further actions here like sending data to server, etc.
  console.log('Form submitted successfully!');
});

function isValidEmail(email) {
  // Basic email validation regex
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
