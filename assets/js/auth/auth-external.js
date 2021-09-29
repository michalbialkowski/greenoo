$('#register__facebook').on('click', function() {
	// console.log('register facebook');
	window.ReactNativeWebView.postMessage('register-facebook');
});

$('#register__google').on('click', function() {
	// console.log('register google');
	window.ReactNativeWebView.postMessage('register-google');
});

$('#login__facebook').on('click', function() {
	// console.log('login facebook');
	window.ReactNativeWebView.postMessage('login-facebook');
});

$('#login__google').on('click', function() {
	// console.log('login google');
	window.ReactNativeWebView.postMessage('login-google');
});