let lastScroll = 0;
let scrollMargin = 75;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	
	if (currentScroll <= 0) {}
	
	if (currentScroll > lastScroll && currentScroll > scrollMargin) {
		$('header #section__menu__desktop .fixed-top').addClass('abovetop');
		$('header #section__menu__mobile .fixed-bottom').addClass('underbottom');
		$('main #section__nav .fixed-top').addClass('abovetop');
	} else if (currentScroll < lastScroll && currentScroll > scrollMargin) {
		$('header #section__menu__desktop .fixed-top').removeClass('abovetop');
		$('header #section__menu__mobile .fixed-bottom').removeClass('underbottom');
		$('main #section__nav .fixed-top').removeClass('abovetop');
	}
	
	lastScroll = currentScroll;
});