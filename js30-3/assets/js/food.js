 
import {addSegments, onSnake, Snake_Speed, snakeBody} from "./snake.js";
import {generatePos} from "./grid.js";
 

let foodPos = {x: 3, y: 3};
let score = 0;

function update() {
    if (onSnake(snakeBody, foodPos)) {
        addSegments();
        setRandomFoodPos();
        score += +Snake_Speed();
    }
}

function setRandomFoodPos() {
    while (onSnake(snakeBody, foodPos)) {
        foodPos = {x: generatePos(), y: generatePos()};
    }
}

function draw(gameBoard) {

    const foodSegment = document.createElement("div")
    foodSegment.style.gridRowStart = foodPos.y;
    foodSegment.style.gridColumnStart = foodPos.x;
    foodSegment.classList.add("food")
    gameBoard.append(foodSegment)

}


 
export {update, draw, score}
 
 