let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoise = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "rgb(40, 3, 75)";
}

const showWinner = (userWin, userchoise, compChoise) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ${userchoise} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${compChoise} beats your ${userchoise}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoise) => {
        const compChoise = genCompChoise();

        if(userchoise === compChoise){
            drawGame();
        }else{
            let userWin = true;
            if(userchoise === "rock"){
                userWin = compChoise === "paper" ? false : true;
            }else if(userchoise === "paper"){
                userWin = compChoise === "scissors" ? false : true;
            }else {
                userWin = compChoise === "rock" ? false : true;
            }
            showWinner(userWin, userchoise, compChoise);
        }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoise = choice.getAttribute("id");
        playGame(userchoise);
    })
})