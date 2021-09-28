if ($.cookie('auth') == 'true') {
	$('body').removeClass('guest');
	$('body').addClass('auth');
	
	$('header .navbar-brand').attr('href', '/greenoo/app.html');
} else {
	// $('body').removeClass('auth');
	// $('body').addClass('guest');
}