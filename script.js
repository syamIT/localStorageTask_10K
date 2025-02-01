function register() {
    let uname = document.getElementById('regUsername').value;
    let pass = document.getElementById('regPassword').value;
    let email = document.getElementById('regEmail').value;
    
    if (uname && pass && email) {
        localStorage.setItem('username', uname);
        localStorage.setItem('password', pass);
        localStorage.setItem('email', email);
        alert('Registration Successful!');
    } else {
        alert('Please fill all fields!');
    }
}

