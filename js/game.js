const jsGame = document.getElementById("freeslot");
jsGame.addEventListener("click", function() {
    this.style.display = 'none';
    document.getElementsByClassName("game-img")[0].style.display = 'none';
});
