let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector(".sub")
const userInput = document.querySelector(".guessField")
// const guess = document.querySelector(".guesses")
const guessElement = document.querySelector(".guesses");
const remaining = document.querySelector(".rem-result")
const lowOrHi = document.querySelector(".lowOrHi")
const over = document.querySelector(".result")


const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
        
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }else if (guess < 1){
        alert("Please enter a number more then 1 ");
    }else if(guess > 100){
        alert("please enter a number less then 100")
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over <br> Random number was ${randomNumber}`);
            endGame();
        }else {
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage("You guessed it right");
        document.body.style.backgroundColor = "green"
        endGame();
    }else if (guess < randomNumber){
        displayMessage("Number is too low")
        document.body.style.backgroundColor = "red"
    }else if (guess > randomNumber){
        displayMessage("Number is too high")
        document.body.style.backgroundColor = "blue"
    }
}

function displayGuess(userGuess) {
    userInput.value = '';
    guessElement.innerHTML += `${userGuess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3 class="newGame">Start new Game</h3>`
    over.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector(".newGame")
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1;
        guessElement.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled');
        over.removeChild(p);
        document.body.style.backgroundColor = ""
        playGame = true;
    })
}