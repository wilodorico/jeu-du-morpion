const game = document.querySelector(".game");
const caseUnique = document.querySelectorAll(".card");
const tableGame = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tab = [];
const rond = "O";
const croix = "X";
const card = `<div class='card'></div>`;

for(const item of caseUnique) {
  item.addEventListener('click', (e) => {
    item.innerHTML = croix;
    
    console.log("-----", caseUnique[1]);
    console.log("click", e.target.innerText);
  })
  console.log("item", item)
}

console.log(caseUnique)


