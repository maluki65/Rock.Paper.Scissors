const Rockbtn = document.getElementById('rock');
const Paperbtn = document.getElementById('Paper');
const Scissorsbtn = document.getElementById('Scissors');
const resetbtn = document.getElementById('reset');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//On computer picking a move 
function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove ='Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove ='Scissors';
    }

    return computerMove;
}

//On playing game
function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
            result = 'Tie';
        } else if (computerMove === 'Paper'){
            result = 'You Lose';
        } else if (computerMove === 'Scissors'){
            result = 'You Win';
        }

    } else if(playerMove === 'Paper'){
        if (computerMove === 'Rock'){
            result = 'You Win';
        } else if (computerMove === 'Paper'){
            result = 'Tie';
        } else if (computerMove === 'Scissors'){
            result = 'You Lose';
        }
        
    } else if(playerMove === 'Scissors'){
        if (computerMove === 'Rock'){
            result = 'You Lose';
        } else if (computerMove === 'Paper'){
            result = 'You Win';
        } else if (computerMove === 'Scissors'){
            result = 'Tie';
        }
    }

    if(result === 'You Win'){
        score.wins += 1;
    } else if (result === 'You Lose'){
        score.losses += 1;
    } else if (result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result} \n Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);
}

//On resetting scrore
resetbtn.addEventListener('click', function(){
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;
    localStorage.removeItem('score');
})

Rockbtn.addEventListener('click', function(){
    playGame('Rock');
})

Paperbtn.addEventListener('click', function(){
    playGame('Paper');
})

Scissorsbtn.addEventListener('click', function(){
    playGame('Scissors');
})
