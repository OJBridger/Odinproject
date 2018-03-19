//Button Logic
document.getElementById('rock').onclick = function() {
	playerSelection = 'rock';
	playRound(playerSelection);
};

document.getElementById('paper').onclick = function() {
	playerSelection = 'paper';
	playRound(playerSelection);
};

document.getElementById('scissors').onclick = function() {
	playerSelection = 'scissors';
	playRound(playerSelection);
};

//Round Logic
function playRound(playerSelection) {

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
	};

    if (playerSelection == 'rock') {
        if (computerPlay() == 'scissors') {
            console.log('PcLose');
        } else if (computerPlay() == 'paper') {
            console.log('PcWin');
        } else {
            console.log('PcDraw');
        }
    }

    if (playerSelection == 'paper') {
        if (computerPlay() == 'rock') {
            console.log('PCWin');
        } else if (computerPlay() == 'scissors') {
            console.log('PCLose');
        } else {
            console.log('PCDraw');
        }
    }

    if (playerSelection == 'scissors') {
        if (computerPlay() == 'paper') {
            console.log('PCWin');
        } else if (computerPlay() == 'rock') {
            console.log('PCLose');
        } else {
            console.log('PCDraw');
        }
    }
}

