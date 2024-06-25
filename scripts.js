document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const switchToLogin = document.getElementById('switchToLogin');
    const switchToSignUp = document.getElementById('switchToSignUp');

    openPopupBtn.addEventListener('click', function () {
        popup.classList.remove('hidden');
    });

    closePopupBtn.addEventListener('click', function () {
        popup.classList.add('hidden');
    });

    switchToLogin.addEventListener('click', function () {
        signUpForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    switchToSignUp.addEventListener('click', function () {
        loginForm.classList.remove('active');
        signUpForm.classList.add('active');
    });
});
