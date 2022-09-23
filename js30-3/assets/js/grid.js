function getGridSize() {
    return document.querySelector("select").value;
}

let Grid_Size = getGridSize();
let generatePos = () => {
    return Math.floor(Math.random() * Grid_Size) + 1
}

let getGameBoard = document.querySelector(".game-board")


export {generatePos, getGridSize}