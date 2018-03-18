//Button Logic
document.getElementById('play').onclick = function() {
	game();
};

//Game Logic
function game() {
	const counter = 5;
	let playWins = 0;
	let compWins = 0;

	for (let i = 0; i < counter; i++) {
		const playerSelection = playerPlay();
		const computerSelection = computerPlay();
		console.log("Player wins " + playWins)
		console.log("Computer wins " + compWins)
		let round = playRound(playerSelection, computerSelection);
		if (round == 'wins') {
			console.log('You won')
			playWins++;
		}
		else if (round = 'loses') {
			console.log('You Lost')
			compWins++;
		}
		else { 
			console.log('Tie')
		}
	}

	if (playWins > compWins) {
		console.log('You win the game')
	}
	else if (compWins > playWins) {
		console.log('You lost the game')
	}
	else {
		console.log('Its a tie overall')
	}
};

//Round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return 'wins';
        } else if (computerSelection == 'paper') {
            return 'loses';
        } else {
            return 'ties';
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'wins';
        } else if (computerSelection == 'scissors') {
            return 'loses';
        } else {
            return 'ties';
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'wins';
        } else if (computerSelection == 'rock') {
            return 'loses'
        } else {
            return 'ties';
        }
    }
}


//Computer Choice
function computerPlay() {
	let scope = Math.random()
	if (scope >= 0.66) {
		return 'rock';
	}
	else if (scope >= 0.33) {
		return 'paper';
	}
	else
		return 'scissors';
}

//Player Choice
function playerPlay() {


	alert('Please Select')

	document.getElementById('rock').onclick = function() {
		let selection = ''
		selection = 'rock'
		return selection;
	};

	document.getElementById('paper').onclick = function() {
		let selection = ''
		selection = 'paper'
		return selection;
	};

	document.getElementById('scissors').onclick = function() {
		let selection = ''
		selection = 'scissors'
		return selection;''
	};
}

//Rewrite the Playround function to ask for the playePLay() selection before starting a round against AI

