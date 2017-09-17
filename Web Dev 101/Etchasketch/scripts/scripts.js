
// Default Grid Size
var dimensions = 16;

// Page Ready Initiate
$(document).ready(function() {

	// When Reset button is activated
    $('#reset-button').click(function() {
	$('.block').css('background-color', '#fff');
	
	// User choices
	dimensions = prompt("Enter a number between 1 and 64", "");
	colour = prompt("Enter a colour");
	
	// Input choice checking
	if (isNaN(dimensions))
	    alert("Please enter an actual number");
	else if (dimensions < 1)
	    dimensions = 1;
	else if (dimensions > 64)
	    dimensions = 64;
	
	// Math on user input to get grid
	var size = 512 / dimensions;
	
	// Calling reset function to remove all '.block' divs and to re-propagate
	reset();

	// Allocating '.block' <div> style data
	$('.block').css({'width':size + 'px', 'height':size + 'px'});

	// Hover trail logic	
	$('.block').hover(function() {
	    $(this).css('background-color', colour);
		});
    });

    $('.block').hover(function() {
		$(this).css('background-color', colour);
    });

    // Calling propagateBlock function
    propagateBlocks();

});

// Function to load blocks into grid
var propagateBlocks = function() {

    for (var i = 0; i < dimensions; i++)
    {
	for (var j = 0; j < dimensions; j++)
	{
	    $('.grid').append("<div class='block'></div>");
	}

    }

}

// Reset function
var reset = function() {
    $('.block').remove();
    propagateBlocks();
}