console.log("welcome to Tic Tac Toe")

let boxItem = document.getElementsByClassName("boxItem");
let count = 0;
let music = new Audio("./sources/music.mp3");
let change = new Audio("./sources/ting.mp3");
let gameOver = new Audio("./sources/gameover.mp3");
let turn = "X";
let isGameOver = false;
let resetButton = document.querySelector(".resetButton");


// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for win 
const checkWin = () => {
    wins = [
        [0, 1, 2, 5, 7.5, 0],
        [3, 4, 5, 5, 17.5, 0],
        [6, 7, 8, 5, 27.5, 0],
        [0, 3, 6, 0, 17.5, 90],
        [1, 4, 7, 5, 17.5, 90],
        [2, 5, 8, 15, 17.5, 90],
        [0, 4, 8, 5, 17.5, 45],
        [2, 4, 6, 5, 17.5, 135]
    ]
    wins.forEach(e => {
        if((boxItem[e[0]].innerText === boxItem[e[1]].innerText) && (boxItem[e[2]].innerText === boxItem[e[1]].innerText) && (boxItem[e[0]].innerText !== "") ){
            document.querySelector('#text').innerHTML = boxItem[e[0]].innerText + " Won"
            isGameOver = true;
            gameOver.play()
            document.querySelector('.winAnimation').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)` 
            document.querySelector(".line").style.width = "20vw"; 
        }
    }) 
}

// Game logic

Array.from(boxItem).forEach((boxItem) => {
    boxItem.addEventListener('click', () => {
        if(boxItem.innerText === '') {
            boxItem.innerText = turn;
            turn = changeTurn();
            change.play();
            checkWin()
            console.log(turn);
            if(isGameOver == false) {
                document.getElementById("text").innerHTML = "Turn for " + turn;
            }
            boxItem.style.paddingTop = '2.6vw';
            boxItem.style.paddingBottom = '2.6vw';
        }
    })
})

resetButton.addEventListener('click', () => {
    document.querySelectorAll(".boxItem").forEach(element => {
        element.innerHTML = ""
        element.style.paddingBottom = "5vw";
        element.style.paddingTop = "5vw";
    })
    document.querySelector('.winAnimation').getElementsByTagName('img')[0].style.width = "0px";
    isGameOver = false;
    if(isGameOver == false) {
        document.getElementById("text").innerHTML = "Turn for " + turn;
    }
    document.querySelector(".line").style.width = "0vw";
})



