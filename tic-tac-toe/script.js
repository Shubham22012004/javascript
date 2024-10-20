let boxes=document.querySelectorAll(".box");

let reset_btn=document.querySelector(".reset-btn");
let newgame_btn=document.querySelector(".new-game");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn=true;  //use to check the turn of player(0 or X)

const winPatterns=[ [0,1,2], //these are the winning values
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];
let ng=0;
boxes.forEach((box)=>{ //box is as variable and for Each take callback funtion
  box.addEventListener("click",()=>{  //addEventListener is taking callback function
    console.log("box tapped");

    if(turn===true){//playerO
      box.textContent="X";
      turn=false;
    }else{//playerX
      box.textContent="O";
      turn=true;
    }
    box.disabled=true;  //use to stop changing the value of box on tapping again
    checkWinner();
  })
})

const showWinner=(val)=>{
  ng=1;
  msg.textContent="congrulation, winner is "+val;
  msg_container.classList.remove("hide");
  disableBoxes();
}
const checkWinner = ()=>{
  for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText; //here "pattern" access the winPatterns array and [0] is use to acces the first element of that  array(internal) and "innerText" use to return the value saved at that box

    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1!='' && pos2!='' && pos3!=''){
      if(pos1===pos2 && pos2===pos3){ //if all three are equal
        console.log(`winner ${pos1}`);  //showint the winner
        showWinner(pos1)
      }
    }
  }
}
const disableBoxes=()=>{
  boxes.forEach((box)=>{
    box.disabled=true;});//once winner got,  all boxes will be disable so that no more entry can be done
};
const enableBoxes=()=>{
  boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText='';    });
     //removing already present value from box
};
const reset_game=()=>{
  turn=true;
  enableBoxes();
  msg_container.classList.add("hide");
}
const newgame_fun=()=>{
  if(ng==1){
    turn=true;
    enableBoxes();
    msg_container.classList.add("hide");
    ng=0;
  }
}
newgame_btn.addEventListener("click",newgame_fun);
reset_btn.addEventListener("click",reset_game);
// const reset_game = () => {
//   turn = true;
//   enableBoxes();
//   msg_container.classList.add("hide");
// };

// const enableBoxes = () => {
//   boxes.forEach((box) => {
//     box.disabled = false;
//     box.innerText = ''; // Reset the box value here
//   });
// };
