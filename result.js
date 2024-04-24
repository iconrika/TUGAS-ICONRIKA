document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    if (username === 'rikaicon' && password === '123456') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password.');
    }
});