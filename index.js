const game = document.querySelector(".game");
const cardList = document.querySelectorAll(".card");
const tableGame = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tab = [];
const rond = "O";
const croix = "X";
let isCheck = true;

for (const item of cardList) {
  item.addEventListener("click", (e) => {
    if (item.innerText === "") {
      isCheck ? (isCheck = false) : (isCheck = true);
      isCheck ? (item.innerHTML = croix) : (item.innerHTML = rond);
    }
    
  });

  
}
