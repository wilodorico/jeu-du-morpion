const game = document.querySelector(".game");
const cardList = document.querySelectorAll(".card");
const tableGame = ["", "", "", "", "", "", "", "", ""];
const rond = "O";
const croix = "X";
let isCheck = true;
const combiWin = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

for (const item of cardList) {
  item.addEventListener("click", (e) => {
    if (item.innerText === "") {
      isCheck ? (isCheck = false) : (isCheck = true);
    }
    isCheck ? (
        item.innerHTML = croix,
        tableGame[item.dataset.id] = croix
      ) : (
        item.innerHTML = rond,
        tableGame[item.dataset.id] = rond
      );
      
      
  });
  
}
console.log(combiWin)
console.log('tableGame :>> ', tableGame);
