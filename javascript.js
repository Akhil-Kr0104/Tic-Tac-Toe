let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let newGamebutt=document.querySelector("#newGame");
let restartbuttn=document.querySelector("#restart");
let player0=true;

let cnt=0;
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.classList.remove("onhover");
        if(player0)
        {
            box.innerText="X";
            player0=false;
        }
        else
        {
            box.innerText="O";
            player0=true;
        }
        box.disabled=true;
        cnt++;
        checkWinner();
        if(cnt==9)
        {
            DrawaGame();
            checkWinner();
        }
    });
})

const DrawaGame=()=>{
    msg.innerText=`Draw`;
    container.classList.remove("hide");
}
const resetFunction=()=>{
    player0=true;
    container.classList.add("hide");
    enableAllButtn();
    cnt=0;
}
const disableAllButtons=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
        box.classList.remove("onhover");
    })
}

const enableAllButtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        box.classList.add("onhover");
    })
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
}
const checkWinner=()=>{
    for(let ele of arr)
    {
        let posValue1=boxes[ele[0]].innerText;
        let posValue2=boxes[ele[1]].innerText;
        let posValue3=boxes[ele[2]].innerText;
        
        if(posValue1!=="" && posValue2!=="" && posValue3!=="")
        {
            if(posValue1==posValue2 && posValue2==posValue3)
            {
                showWinner(posValue1);
                disableAllButtons();
            }
        }
    }
}

newGamebutt.addEventListener("click", resetFunction);
restartbuttn.addEventListener("click", resetFunction);
