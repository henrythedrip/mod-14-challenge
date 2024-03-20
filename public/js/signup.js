const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#create-account-name').value.trim();
    const email = document.querySelector('#create-account-email').value.trim();
    const password = document.querySelector('#create-account-password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.create-account-drip')
    .addEventListener('submit', signupFormHandler);