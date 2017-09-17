$(document).ready(function() {
	for(i = 1; i <= 256; i++) {
		$('.container').append('<div></div>');
		console.log('Div ' + i + ' Appended');
		$('.container').find('div').addClass('myclass');
	}
	console.log('All Divs allocated Class');
});
