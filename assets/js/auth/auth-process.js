if ($.cookie('auth') == 'true') {
	$('body').removeClass('guest');
	$('body').addClass('auth');
	
	$('header .navbar-brand').attr('href', 'app.html');
} else {
	// $('body').removeClass('auth');
	// $('body').addClass('guest');
}