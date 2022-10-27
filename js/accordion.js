var faq_questions = document.querySelectorAll('.faq__question');
for(var i = 0; i < faq_questions.length; i++) {
    faq_questions[i].addEventListener('click', function () {
        this.classList.toggle('faq__question-active');
        var closedText = this.querySelector('.faq__question__close-text');
        if (closedText.style.maxHeight) {
            closedText.style.maxHeight = null;
        } else {
            closedText.style.maxHeight = closedText.scrollHeight + 30 + 'px';
        }
    });
};