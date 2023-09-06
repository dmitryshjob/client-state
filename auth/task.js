const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.response.success) {
            const userId = xhr.response.user_id;
            console.log(userId)
            localStorage.setItem('userId', userId);
            welcomeUser(userId);
        } else {
            alert('Неверный логин или пароль');
        }
    }        
    xhr.send(formData);
    form.reset();
});


function welcomeUser(userId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.querySelector('#user_id').textContent = userId;
}

document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');
    if(userId) {
        welcomeUser(userId);
    }
});