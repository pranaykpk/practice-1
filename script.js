let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const myscore = document.querySelector("#myscore");
const compSc = document.querySelector("#compScore");

const drawGame=()=>{
   //console.log("It's a draw");
    msg.innerText = "It's a draw";
    msg.style.backgroundColor = "gray";
}
const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userWin)=>{
    if(userWin == true){
     //  console.log("You Win");
        userScore++;
        msg.innerText = "You Won";
        msg.style.backgroundColor = "Green";
        myscore.innerText = userScore;
    }
    else{
         compScore++;
        compSc.innerText = compScore;
      // console.log("You Lost");
        msg.innerText = "You Lost";
        msg.style.backgroundColor = "red";
    }
}
const playgame=(userChoice)=>{
    const compChoice = genCompChoice();
  // console.log("User Choice is",userChoice);
   // console.log("Comp Choice is",compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }
   
    else{
        let userWin = true;
       if(userChoice === "rock"){
        userWin = compChoice ==="paper"?false:true;
       }
       else if(userChoice === "paper"){
        userWin = compChoice === "rock"?true:false;
       }
       else{
        userWin = compChoice === "rock"?false:true;
       
       }
       showWinner(userWin);
    }
    
}

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
       const userAtt = choice.getAttribute("id");
        playgame(userAtt);
    });
});
