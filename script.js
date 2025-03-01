function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = "brokenxd";
    const validPassword = "chinguftw";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        return true;
    } else {
        document.getElementById('error-message').style.display = "block";
        return false;
    }
}