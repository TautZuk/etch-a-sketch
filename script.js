let gridCells = 16;
let gridSquares = gridCells * gridCells;
const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < gridSquares; i++) {
  const gridItem = document.createElement("div");  
  gridItem.classList.add("gridCell")
  gridContainer.appendChild(gridItem);
};

const itemHover = document.querySelectorAll(".gridCell")
for(let j = 0; j < itemHover.length; j++){

itemHover[j].addEventListener("mouseover", function (e) {
  e.target.setAttribute("style", "background-color:red;");
});
};
