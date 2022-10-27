window.onload = function() {
    if(localStorage.getItem('cookieAgree')) return;

    let cookiePopup = document.querySelector('.cookie-popup');
    if(!cookiePopup) return;

    cookiePopup.classList.remove('hidden-cookie');
    
    let closeCookie = cookiePopup.querySelector('.close-cookie');
    let agreeCookie = cookiePopup.querySelector('.cookie-agree');

    closeCookie.addEventListener('click', function() {
        cookiePopup.classList.add('hidden-cookie');
    });

    agreeCookie.addEventListener('click', function() {
        localStorage.setItem('cookieAgree', 'true');
        cookiePopup.classList.add('hidden-cookie');
    })
}