let btn=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgmebtn = document.querySelector("#new-game");
let message = document.querySelector(".message");
let msg = document.querySelector("#msgg");

let turnO = true;


const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btn.forEach(box => {
    box.addEventListener("click",() =>{
        console.log("box clicked");
        if(turnO){
            box.innerText ="O";
            turnO =false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const resetgame = () => {
    turnO = true;
    enablebox();
    message.classList.add("hide");

}

const enablebox = () => {
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}

const disablebox = () => {
    for(let box of btn){
        box.disabled = true;
    }
}
const showwinner = (winner) => {
    msg.innerText = (`Congratulations, Winner is ${winner}`);
    msg.style.color="#998cff";
    message.classList.remove("hide");
    disablebox();
}
const checkwinner = () => {
    for(let pattern of winpatterns) {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(btn[pattern[0]].innerText,btn[pattern[1]].innerText,btn[pattern[2]].innerText);

        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;

        if(pos1val != "" && pos1val != "" && pos3val != ""){
            if(pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);

            }
        }
    }
}

newgmebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);