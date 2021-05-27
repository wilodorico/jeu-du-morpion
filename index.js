const game = document.querySelector(".game");
const cardList = document.querySelectorAll(".card");
const message = document.querySelector(".message");
const btnRestart = document.querySelector(".restart");
let win = false;
let activPlayer = "X";
let tableGame;
const combiWin = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const init = () => {
  tableGame = ["", "", "", "", "", "", "", "", ""];
  message.innerHTML = `Au joueur ${activPlayer} de jouer`;
  win = false;
  btnRestart.style.display = "none";
  for(let item of cardList) {
    item.innerHTML = "";
  }
}

const clickEvent = (item) => {
  if(win) {
    return;
  }
  if (item.innerText === "") {
    item.innerHTML = activPlayer;
    item.style.color = activPlayer === "X" ? "red" : "orange";
    tableGame[item.dataset.id] = activPlayer;

  console.log("tableGame :>> ", tableGame);

  for (let index of combiWin) {
    let val1 = tableGame[index[0]];
    let val2 = tableGame[index[1]];
    let val3 = tableGame[index[2]];
    if (val1 === "" || val2 === "" || val3 === "") {
      continue;
    }
    if (val1 === val2 && val2 === val3) {
      message.innerHTML = `Le joueur ${activPlayer} a gagné !`
      win = true;
      btnRestart.style.display = "block";
      return;
    }
  }
    activPlayer = activPlayer === "X" ? "O" : "X";
    message.innerHTML = activPlayer;
  }
};

for (const item of cardList) {
  item.addEventListener("click", () => clickEvent(item));
}
btnRestart.addEventListener("click", init)
init()
