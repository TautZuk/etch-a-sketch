//initial Grid creation
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

// event listener for black color button
const blackButton = document.querySelector("#black");
blackButton.addEventListener("click", changeColor);

// add event listener for eraser button
const eraser = document.querySelector("#white");
eraser.addEventListener("click", changeColor);

// event listener for clear Grid button
const clearGrid = document.querySelector("#clearGrid");
clearGrid.addEventListener("click", clean);

// event listener for rainbow cells
const rainbowCells = document.querySelector("#rainbowCells")
rainbowCells.addEventListener("click", rainbow)

//Setting css variables
document.documentElement.style.setProperty("--gridcolumns", gridCells);
document.documentElement.style.setProperty("--gridrows", gridCells);

// Hover effect
const itemHover = document.querySelectorAll(".gridCell");

for(let j = 0; j < itemHover.length; j++){
    itemHover[j].addEventListener("mouseenter", function (e) {
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
  const cellsToRemove = document.querySelectorAll(".gridCell");
  for(let j = 0; j < cellsToRemove.length; j++){
  cellsToRemove[j].remove()
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
  itemHover[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
  });
};
};

// random color function that I got from SO like a real dev, LOL.
function randomColor() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

function rainbow() {
  const itemHover = document.querySelectorAll(".gridCell");

  for (let j = 0; j < itemHover.length; j++){
  itemHover[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = randomColor();
});
};
};

function changeColor () {
  changedColor = this.id;
  const itemHover = document.querySelectorAll(".gridCell");

  for (let j = 0; j < itemHover.length; j++){
  itemHover[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = changedColor;
});
};
};
