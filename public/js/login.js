// console.log("hey, figure out how to do logins");
const loginFormHandler = async (event) => {

    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    // console.log(email, password);

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

//   ----------------------------
  
  document
    .querySelector('.login-drip')
    .addEventListener('submit', loginFormHandler);