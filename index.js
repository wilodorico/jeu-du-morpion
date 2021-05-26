const game = document.querySelector(".game");
const cardList = document.querySelectorAll(".card");
const message = document.querySelector('.message')
const playerOne = "O";
const playerTwo = "X";
let gagne = false;
let isCheck = false;
const tableGame = ["", "", "", "", "", "", "", "", ""];
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

for (const item of cardList) {
  item.addEventListener("click", (e) => {
    if (item.innerText === "") {
      isCheck ? (isCheck = false) : (isCheck = true);
    }
    
    isCheck
      ? ((item.innerHTML = playerTwo),
        (item.style.color = "red"),
        (tableGame[item.dataset.id] = playerTwo))
      : ((item.innerHTML = playerOne),
        (item.style.color = "orange"),
        (tableGame[item.dataset.id] = playerOne));
    console.log("tableGame :>> ", tableGame);

    for (let index of combiWin) {
      let val1 = tableGame[index[0]];
      let val2 = tableGame[index[1]];
      let val3 = tableGame[index[2]];
      if (val1 === "" || val2 === "" || val3 === "") {
        continue;
      }
      if (val1 === val2 && val2 === val3) {
        val1 === "X" ? 
        (message.innerHTML = `Le joueur ${playerTwo} a gagné !`)
        : 
        (message.innerHTML = `Le joueur ${playerOne} a gagné !`)
        gagne = true;
      }
    }
  });
}
