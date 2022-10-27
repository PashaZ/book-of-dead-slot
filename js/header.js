var header = document.querySelector('header'),
	scrollPrev = 0;

window.addEventListener('scroll', function() {
	var scrolled = window.scrollY;

	if ( scrolled > 65 && scrolled > scrollPrev ) {
		header.classList.add('out');
	} else {
		header.classList.remove('out');
	}
	scrollPrev = scrolled;
});


var dropDowns = document.querySelectorAll('.dropdown-menu input');
for(var i = 0; i < dropDowns.length; i++) {
	dropDowns[i].addEventListener('click', function () {
		var list = this.parentNode.querySelector('.dropdown-menu__links');
		this.classList.toggle('opened-dropdown');
		if(this.classList.contains('opened-dropdown')) {
			list.style.maxHeight = list.scrollHeight + 'px';
		} else {
			list.style.maxHeight = 0;
		};
	});
}