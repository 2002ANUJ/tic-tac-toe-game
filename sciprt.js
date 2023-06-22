console.log("welcome to the tic tac toe")
let music = new Audio("bg.mp3")
let turnaudio = new Audio("click.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";

const changeTurn = ()=>{

    return turn === "X"?"0":"X";
};

const checkWin = ()=>{

}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach( element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnaudio.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;

        }
    })
})