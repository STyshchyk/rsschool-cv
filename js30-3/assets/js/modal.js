

let modalOpen = true;
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let getScoreDash = JSON.parse(window.localStorage.getItem("Dashboard"));
let scoreBoard = document.querySelector(".score")
let sbtBtn = document.querySelector("input[type=submit]")
if (modalOpen) {
    modal.style.display = "block";
     updateScoreBoard();

} else modal.style.display = "none";

 sbtBtn.addEventListener("click", ()=>{
     modalOpen = false;
     modal.style.display = "none";
 })

function returnModal() {
    return modalOpen;
}
function updateScoreBoard(){
 
   if (!getScoreDash)return;
 
    getScoreDash.forEach((elem, index) =>{
        let createEleme = document.createElement('p')
        createEleme.textContent = `${Object.keys(elem)[0]}:  ${Object.values(elem)[0]}`
        scoreBoard.append(createEleme)
    })
}

export default returnModal;
