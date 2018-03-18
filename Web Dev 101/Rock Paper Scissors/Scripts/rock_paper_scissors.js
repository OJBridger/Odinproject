//Game

//Play button runs function Game(); when pressed.
document.getElementById('play').onclick = function() {
	game();
};

document.getElementById('rock').onclick = function() {
	alert('Rock Selected');
};

document.getElementById('paper').onclick = function() {
	alert('Paper Selected');
};

document.getElementById('scissors').onclick = function() {
	alert('Scissors Selected');
};

function game() {
	const counter = 5;
	let playWins = 0;
	let compWins = 0;

	for (let i = 0; i < counter; i++) {
		const playerSelection = playerPlay();
		const computerSelection = computerPlay();
		console.log('Test')
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
}

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
	let answer = prompt("Rock, Paper or Scissors?");
	answer = answer.toLowerCase();
	while (!(answer == 'rock' || answer == 'paper' || answer == 'scissors')) {
        answer = prompt('Please type either rock, paper, or scissors');
        answer = answer.toLowerCase();
    } 
    return answer;
}