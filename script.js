let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let player1 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

resetgame = () => {
    player1 = true;
    enableBox();
}

enableBox = () => {
   for(let dabba of boxes){
    dabba.disabled = false;
    dabba.innerHTML = ""
   }
}

disableBox = () => {
    for(let dabba of boxes){
        dabba.disabled = true;
    }
}

boxes.forEach((dabba => {
    dabba.addEventListener("click", () => {
        if(player1){
            dabba.innerHTML = "O";
            player1 = false;
        }
        else{
            dabba.innerHTML = "X";
            player1 = true
        }
        dabba.disabled = true;
        checkWinner();
        
    })
}))

const checkWinner = () => {
    for(let pattern of winPatterns){
      let winPattern1=  boxes[pattern[0]].innerHTML;
      let winPattern2=  boxes[pattern[1]].innerHTML;
      let winPattern3=  boxes[pattern[2]].innerHTML;
      if(winPattern1 != "" && winPattern2 != "" && winPattern3 != ""){
        if(winPattern1 === winPattern2 && winPattern2 === winPattern3){
            disableBox()
            alert("player " +  winPattern1 + " wins" );
        }
            
           
      }
    }
}
resetbtn.addEventListener("click", resetgame);












