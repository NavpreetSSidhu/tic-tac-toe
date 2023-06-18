console.log("Welcome to Tic Tac Toe")

const bgMusic = new Audio("music.mp3");
const turnAudio = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");
let gameEnd = false;

let turn = "X";

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxtext');
    // for all rows, columns, x,y and angle
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) &&(boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " has Won";
            gameEnd = true;
            gameOver.play();
            bgMusic.pause();
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if(boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            bgMusic.play();
            checkWin();
            if(!gameEnd)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})

// Add on click listener to reset

let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
        gameEnd = false;
        turn = "X";
        document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0px";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.line').style.width = "0px";
        bgMusic.play();
    })
})