$('#register__facebook').on('click', function(e) {
	if ($.cookie('app') == 'true') {
		e.preventDefault();
		window.ReactNativeWebView.postMessage('register-facebook');
	}
});

$('#register__google').on('click', function(e) {
	if ($.cookie('app') == 'true') {
		e.preventDefault();
		window.ReactNativeWebView.postMessage('register-google');
	}
});

$('#login__facebook').on('click', function(e) {
	if ($.cookie('app') == 'true') {
		e.preventDefault();
		window.ReactNativeWebView.postMessage('login-facebook');
	}
});

$('#login__google').on('click', function(e) {
	if ($.cookie('app') == 'true') {
		e.preventDefault();
		window.ReactNativeWebView.postMessage('login-google');
	}
});