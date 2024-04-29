const loginForm = document.getElementById('login-form');
const messageEl = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();

  if (username === '' || password === '') {
    messageEl.textContent = 'Please enter a valid username and password.';
    return;
  }

  // Simulate successful login
  if (username === 'admin' && password === 'password') {
    messageEl.textContent = 'Login successful!';
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 2000);
  } else {
    messageEl.textContent = 'Invalid username or password.';
  }
});