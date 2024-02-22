let userScore=0;
let computerScore=0;
let result;
let choices =document.querySelectorAll(".tool");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#computer-score");

choices.forEach((choice)=>{
choice.addEventListener("click",() => {
   let userChoice=choice.getAttribute("id");
   console.log("usser",userChoice);
   playGame(userChoice);
    
});    
});
let playGame=(userChoice)=>{
    let computerChoice=genRandom();
    console.log("cmchoice",computerChoice);

    if(userChoice === computerChoice){
       result=0;
      
    }
    else if(userChoice==="stone"){
        result= computerChoice==="paper" ? -1:1;
        result= computerChoice==="scissor"? 1:-1;
    }
    else if(userChoice==="paper"){
        result=computerChoice==="stone"? 1:-1;
        resulr=computerChoice==="scissor"? -1:1;
    }
    else{
        result=computerChoice==="stone" ?-1:1;
        result=computerChoice==="paper" ? 1:-1;
    }
   showResult(result,computerChoice,userChoice);
}

const genRandom=() =>{
    const arr=["stone","paper","scissor"];
    const idx=Math.floor(Math.random() *3);
    return arr[idx];
}

let showResult=(result, computerChoice ,userChoice)=>{
    let resultpannel=document.querySelector(".result");
    if(result===0){
        resultpannel.innerText="Game draw! Try Again ";
        resultpannel.style.backgroundColor="#939393";
    }
    else if(result===1){
        userScore++;
        uscore.innerText=userScore;
        resultpannel.innerText=`You Win! your ${userChoice} beats ${computerChoice}`;
        resultpannel.style.backgroundColor="green";
    }
    else{
        computerScore++;
        cscore.innerText=computerScore;
        resultpannel.innerText=`You Loose!  ${computerChoice} beats yours ${userChoice}`;
        resultpannel.style.backgroundColor="red";

    }
}


  


