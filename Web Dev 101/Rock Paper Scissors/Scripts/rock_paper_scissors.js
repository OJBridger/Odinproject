//Button Logic
document.getElementById('rock').onclick = function() {
	playerSelection = 'rock';
	playRound(playerSelection);
	showResults();
};

document.getElementById('paper').onclick = function() {
	playerSelection = 'paper';
	playRound(playerSelection);
	showResults();
};

document.getElementById('scissors').onclick = function() {
	playerSelection = 'scissors';
	playRound(playerSelection);
	
};

document.getElementById('results').onclick = function() {
	showResults();
};

//Scoring Logic
let compScore = 0;
let playerScore = 0;
let content = document.createElement('div');

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
            playerScore += 1;
        } else if (computerPlay() == 'paper') {
            compScore += 1;
        } else {
        }
    }

    if (playerSelection == 'paper') {
        if (computerPlay() == 'rock') {
            compScore += 1;
        } else if (computerPlay() == 'scissors') {
            playerScore += 1;
        } else {
        }
    }

    if (playerSelection == 'scissors') {
        if (computerPlay() == 'paper') {
            compScore += 1;
        } else if (computerPlay() == 'rock') {
            playerScore += 1;
        } else {
        }
    }
    return playerScore
    return compScore
}


//DOM Insertion for results
function showResults() {

	const container = document.querySelector('#resultsContainer');

	content.classList.add('content');
	content.textContent = 'Results: ' + 'AI: ' + compScore + ' Player: ' + playerScore;

	container.appendChild(content);
}









