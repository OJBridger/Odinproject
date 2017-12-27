//Game
function game() {

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

playRound(playerPlay, computerPlay)
