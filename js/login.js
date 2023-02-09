const loginFormHandler = async (event) => {
    const password = document.querySelector('#passwordLogin').value.trim();
    const username = document.querySelector('#usernameLogin').value.trim();
    event.preventDefault();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })  

        if (response.ok) {
            document.location.replace('/api/users/dashboard');
        } else if(!response.ok){
            alert(response.statusText)
        }
    };
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);