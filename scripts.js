document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');

    openPopupBtn.addEventListener('click', function () {
        popup.classList.add('active');
    });

    closePopupBtn.addEventListener('click', function () {
        popup.classList.remove('active');
    });
});
