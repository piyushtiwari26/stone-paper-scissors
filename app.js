let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];//stored the array  because we can not generate strings randomly but we can easily generate numbers easily so we stored the values in the array.
    // math.floor is used to remove decimal values
  //rock, paper, scissor 
};

const drawGame = ()=>{
    console.log("game was draw")
    msg.innerText="It's a draw!"
    msg.style.backgroundColor ="#081b31"
}
const showWinner = (userWin,userChoice,compChoice)=>
{
    if(userWin)
{    
    userScore++;
    userScorePara.innerText= userScore;
    msg.innerText=`you win ! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor ="green"
 
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose:)")
    msg.innerText=`you lose ! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor ="red"
    
}
}
const playGame = (userChoice) => {
console.log("user choice " , userChoice )
//to generate computer choice 
const compChoice = genCompchoice();
console.log("comp choice", compChoice);

// for draw 
if (userChoice === compChoice)
{
    drawGame();
}else{
    let userWin = true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin = compChoice ==="paper"? false :true;
    }else if(userChoice==="paper") {
// scissor, rock
userWin=compChoice==="scissors"?false:true;
    }else{
        //rock paper
        userWin = compChoice==="scissors"?false:true;
    }
    showWinner(userWin,userChoice,compChoice)
}

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice)
        playGame(userChoice);
    });
});