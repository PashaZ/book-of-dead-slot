'use strict';

(function() {
    let searchParams = new URLSearchParams(window.location.search.substring(1));
    let casinoName = searchParams.get('name');
    let casinoUrl = searchParams.get('url');
    let casinoImg = searchParams.get('img');
    let wrapper = document.querySelector('.redirection-page .wrapper');
    let title = document.querySelector('.redirection-page h1');
    
    if(casinoName) {
        title.textContent = 'Redirect to ' + casinoName[0].toUpperCase() + casinoName.slice(1);
    }

    if(casinoImg) {
        let img = document.createElement('img');
        img.src = casinoImg;
        img.alt = 'casino-logo';
        wrapper.append(img);
    }

    window.opener = null;
    if(casinoUrl) {
        setTimeout(function () {
            window.location.href = decodeURIComponent(casinoUrl);
        }, 2000)
    } else {
        window.location.href = '/';
    }
})();
