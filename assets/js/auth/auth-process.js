if ($.cookie('auth') == 'true') {
	$('body').removeClass('guest');
	$('body').addClass('auth');
	
	// $('header .navbar-brand').attr('href', '/app.html');
	$('header .navbar-brand').attr('href', '/app-konto.html');
} else {
	// $('body').removeClass('auth');
	// $('body').addClass('guest');
}