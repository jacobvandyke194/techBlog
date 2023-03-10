const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/api/users/dashboard');
        } else if(response.error) {
            alert(response.statusText)
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);