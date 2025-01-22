let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let messcon = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");

let Turn0 = true;
const winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(Turn0 === true){
            box.innerText = '0';
            Turn0 = false;
        }
        else{
            box.innerText = 'x';
            Turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

let resetgame = () =>{
    Turn0 = true;
    enablesbox();
    messcon.classList.add("hide");
}

let disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let enablesbox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let showw = (winner) =>{
    msg.innerText = `congradulation,winner is ${winner}`;
    messcon.classList.remove("hide");
    disablebox();
}

const checkwinner = () =>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
         let pos1 = boxes[pattern[0]].innerText;
         let pos2 = boxes[pattern[1]].innerText;
         let pos3 = boxes[pattern[2]].innerText;

         if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winnner",pos1);
                showw(pos1);
            }
         }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);