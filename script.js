//Grid creation
let gridCells = 16;
let gridSquares = gridCells * gridCells;
const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < gridSquares; i++) {
  const gridItem = document.createElement("div");  
  gridItem.classList.add("gridCell");
  gridContainer.appendChild(gridItem);
};

// event listener for new grid button
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", Grid);

// event listener for clear Grid button
const clearGrid = document.querySelector("#clearGrid");
clearGrid.addEventListener("click", clean);

//Setting css variables
document.documentElement.style.setProperty("--gridcolumns", gridCells);
document.documentElement.style.setProperty("--gridrows", gridCells);

// Hover effect
const itemHover = document.querySelectorAll(".gridCell");

for(let j = 0; j < itemHover.length; j++){
    itemHover[j].addEventListener("mousemove", function (e) {
      e.target.style.backgroundColor = "black";
  });
};
// Clean grid function

function clean() {
  const itemHover = document.querySelectorAll(".gridCell");

  for(let j = 0; j < itemHover.length; j++){
  itemHover[j].style.backgroundColor = "white";}

}
//New grid function
function Grid() {
  gridCells = prompt("Choose grid size between 1 and 100.");

  while (gridCells < 1 || gridCells > 100 ){
    gridCells = prompt("Choose grid size between 1 and 100.");
  }

  gridSquares = gridCells * gridCells;

  for (let i = 0; i < gridSquares; i++) {
    const gridItem = document.createElement("div");  
    gridItem.classList.add("gridCell");
    gridContainer.appendChild(gridItem);
  };

  document.documentElement.style.setProperty("--gridcolumns", gridCells);
  document.documentElement.style.setProperty("--gridrows", gridCells);

  const itemHover = document.querySelectorAll(".gridCell");

  for(let j = 0; j < itemHover.length; j++){
  itemHover[j].style.backgroundColor = "white";
  itemHover[j].addEventListener("mousemove", function (e) {
      e.target.style.backgroundColor = "black";
  });
};
};