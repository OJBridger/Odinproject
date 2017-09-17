$(document).ready(function() {
	for(i = 1; i <= 256; i++) {
		$('.container').append('<div></div>');
		console.log('Div ' + i + ' Appended');
		$('.container').find('div').addClass('default');
	}
	console.log('All Divs allocated Class');


	$('.container').find('div').on('mouseenter', function() {
		$(this).addClass('highlighted');
	});
	$('.container').find('div').on('mouseleave', function() {
		$(this).removeClass('highlighted');
		$(this).addClass('trail');
	});
});
