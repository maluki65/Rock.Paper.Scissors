const Rockbtn = document.getElementById('rock');
const Paperbtn = document.getElementById('Paper');
const Scissorsbtn = document.getElementById('Scissors');

let computerMove = '';

function pickComputerMove(){
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove ='Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove ='Scissors';
    }
}
Rockbtn.addEventListener('click', function(){
    pickComputerMove();

    let result = '';
    if (computerMove === 'Rock'){
        result = 'Tie';
    } else if (computerMove === 'Paper'){
        result = 'You Lose';
    } else if (computerMove === 'Scissors'){
        result = 'You Win';
    }
    alert(`You picked rock. Computer picked ${computerMove}.${result}`);
})

Paperbtn.addEventListener('click', function(){
    pickComputerMove();

    let result = '';
    if (computerMove === 'Rock'){
        result = 'You win';
    } else if (computerMove === 'Paper'){
        result = 'Tie';
    } else if (computerMove === 'Scissors'){
        result = 'You lose';
    }
    alert(`You picked Paper. Computer picked ${computerMove}.${result}`);
})

Scissorsbtn.addEventListener('click', function(){
    pickComputerMove();

    let result = '';
    if (computerMove === 'Rock'){
        result = 'You lose';
    } else if (computerMove === 'Paper'){
        result = 'You win';
    } else if (computerMove === 'Scissors'){
        result = 'Tie';
    }
    alert(`You picked Scissors. Computer picked ${computerMove}.${result}`);
})
