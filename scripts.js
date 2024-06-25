document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');

    openPopupBtn.addEventListener('click', function () {
        popup.classList.toggle('active');
        openPopupBtn.classList.add('hidden');
    });

    closePopupBtn.addEventListener('click', function () {
        popup.classList.remove('active');
        openPopupBtn.classList.remove('hidden');
    });
});
