import {getInputDireciton} from "./input.js";
import {getGridSize} from "./grid.js";


 
let Snake_Speed = () => document.querySelector("#gameSpeed").value <= 0 ? 1 : document.querySelector("#gameSpeed").value;
 

let newSegments = 1;
const snakeBody = [
    {x: 11, y: 11},
    {x: 10, y: 11}

]

function update() {
    if (headBang() || outBorder()) {
        if (confirm("You lose, try again?")) location.reload();
    }
    const inputDirection = getInputDireciton();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

}

function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement("div")
        snakeSegment.style.gridRowStart = segment.y;
        snakeSegment.style.gridColumnStart = segment.x;
        snakeSegment.classList.add("snake")
        gameBoard.append(snakeSegment)
    })
}

function onSnake(positionSnake, positionFood, ignore = false) {
    return positionSnake.some((elem, index) => {
        if (ignore && index === 0) return false;
        return elem.x === positionFood.x
            && elem.y === positionFood.y
    })
}

function onSnake2(positionSnake) {
    return positionSnake.some(elem => {
        return elem.x > getGridSize() || elem.x < 1
            || elem.y > getGridSize() || elem.y < 1
    })
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
}

function headBang() {
    return onSnake(snakeBody, snakeBody[0], true)

}

function outBorder() {
    return onSnake2(snakeBody)
}

function gameOver() {
    return headBang() || outBorder();
}
 
export {update, draw, Snake_Speed, onSnake, snakeBody, addSegments, gameOver}
 
