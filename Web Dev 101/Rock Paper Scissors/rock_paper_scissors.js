//Computer Choice
function computerPlay() {
	scope = Math.random()
	if (scope >= 0.66) {
		return "rock"
	}
	else if (scope >= 0.33) {
		return "paper"
	}
	else
		return "scissors"
}

//Player Choice
function playerPlay() {
	//alert that gets the input from player, applicable to any case
}


function playRound(computerPlay, playerPlay) {
	//if statement on what beats what,
	//go to best of three
	//declare winner
}

//Calls the game
playRound(computerPlay, playerPlay)