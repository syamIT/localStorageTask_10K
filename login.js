function login() {
    let uname = document.getElementById('loginUsername').value;
    let pass = document.getElementById('loginPassword').value;
    
    let storeUsername = localStorage.getItem('username');
    let storePassword = localStorage.getItem('password');
    
    if (uname === storeUsername && pass === storePassword) {
        alert('Login Successful!');
    } else {
        alert('Invalid Credentials!');
    }
}