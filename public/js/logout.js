const LogoutHandler = async event => {
    const response = await fetch('/api/logout', {
      method: 'POST'
    });
  
    if (response.ok) {
      document.location.replace('/login')
    } else {
      alert('failed to logout');
    }
  }
  
  document
    .querySelector('#logout')
    .addEventListener('click', LogoutHandler)