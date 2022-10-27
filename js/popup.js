(function() {
    const popup = document.querySelector('.casino-popup');
    if(!popup) return;

    const closePopup = popup.querySelector('.close-casino-popup');
    const openPopupBtns = document.querySelectorAll('.popup-btn');

    openPopupBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            popup.classList.add('open-popup');
        });
    })

    closePopup.addEventListener('click', function() {
        popup.classList.remove('open-popup');
    })
}());