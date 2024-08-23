function showLogin() {
    document.getElementById('btn').style.transform = 'translateX(0)';
    document.querySelector('.login').classList.add('active');
    document.querySelector('.register').classList.remove('active');
}

function showRegister() {
    document.getElementById('btn').style.transform = 'translateX(110px)';
    document.querySelector('.login').classList.remove('active');
    document.querySelector('.register').classList.add('active');
}
