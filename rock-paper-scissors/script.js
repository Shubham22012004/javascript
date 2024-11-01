let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");

let msg = document.querySelector(".msg");
let mresult = document.querySelector(".mresult");
let cresult = document.querySelector(".cresult");

let arr = ["rock", "paper", "scissor"];

let man_Choice, man_result=0,comp_result=0;

rock.addEventListener("click",()=>{
  man_Choice="rock";
  let computer_Choice = arr[Math.floor(Math.random()*arr.length)];
  determineWinner(man_Choice, computer_Choice);
  setTimeout(()=>{msg.innerText="result will display here."},2000);
});

paper.addEventListener("click",()=>{
  man_Choice="paper";
  let computer_Choice = arr[Math.floor(Math.random()*arr.length)];
    determineWinner(man_Choice, computer_Choice);
    setTimeout(()=>{msg.innerText="result will display here."},2000);
});

scissor.addEventListener("click",()=>{
  man_Choice="scissor";
  let computer_Choice = arr[Math.floor(Math.random()*arr.length)];
    determineWinner(man_Choice, computer_Choice);
    setTimeout(()=>{msg.innerText="result will display here."},2000);
})

function determineWinner(man_Choice, computer_Choice) {
    if (man_Choice === computer_Choice) {
        msg.innerText = "It's a tie!";
    } else if (
        (man_Choice === "rock" && computer_Choice === "scissor") ||
        (man_Choice === "paper" && computer_Choice === "rock") ||
        (man_Choice === "scissor" && computer_Choice === "paper")
    ) {
        msg.innerText = "You win!";
        man_result+=1;
        mresult.innerText=man_result;
    } else {
        msg.innerText = "Computer wins!";
        comp_result+=1;
        cresult.innerText=comp_result;
    }
  }
