import {getGridSize} from "./assets/js/grid.js";
import returnModal from "./assets/js/modal.js";
import {draw as drawFood, score, update as updateFood} from "./assets/js/food.js";
import {Snake_Speed, draw as drawSnake, update as updateSnake, gameOver} from "./assets/js/snake.js";

const gameBoard = document.querySelector(".game-board")
let getScore = document.querySelector(".scorePoints")
let getName = () => document.querySelector("#boardName").value === "" ? "no name" : document.querySelector("#boardName").value
let lastRenderTime = 0;
let modalIsOpen = true;
let scoreDash = JSON.parse(window.localStorage.getItem("Dashboard")) === null ? [] : JSON.parse(window.localStorage.getItem("Dashboard"))
let scoreDashBoard = document.querySelector(".score")
let modal = document.getElementById("myModal");

function writeDash(name) {
    scoreDash.push({[name]: 1})
}

function main(currentTime) {
    modalIsOpen = returnModal();

    if (gameOver()) {
        writeDash(getName());
        window.localStorage.setItem("Dashboard", JSON.stringify(scoreDash))
        window.location.reload()


        return;
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / Snake_Speed()) return;

    lastRenderTime = currentTime;

    if (!modalIsOpen) {
        gameBoard.style.gridTemplateRows = `repeat(${getGridSize()}, 1fr)`
        gameBoard.style.gridTemplateColumns = `repeat(${getGridSize()}, 1fr)`
        update()
        draw()
    }
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    updateScore()
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard)
    drawFood(gameBoard)
}


function updateScore() {
    getScore.textContent = `Score: ${score}`
}
