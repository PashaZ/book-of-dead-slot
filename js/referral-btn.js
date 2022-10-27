'use strict';

(function() {
    document.addEventListener('click', function(e) {
        let referralBtn = e.target.closest('.referral-btn');
        if(referralBtn) {
            e.preventDefault();
            handleFollowReferral(referralBtn);
        }
    });

    function handleFollowReferral(target) {
        let referralBtn = target;
        let casinoName = referralBtn.dataset.casinoName || '';
        let casinoUrl = referralBtn.dataset.casinoUrl || '';
        let casinoImg = referralBtn.dataset.casinoImg || '';

        if(casinoUrl) {
            let url = '/to-casino?name=' + casinoName + '&url=' + encodeURIComponent(casinoUrl) + '&img=' + casinoImg;

            window.open(url);
        }
    }
})();
