initializeButton();
createGrid(16);

//Initialize button to prompt users for grid size
function initializeButton(){
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    let size = prompt("Enter grid size between 2 and 100 inclusive:")
    size = +size;
    if (size >= 2 && size <= 100){
      clearGrid();
      createGrid(size);
    }
  });
}

//Create a grid with hover effect on each cell
//Cell becomes a random color after cursor leaves
//Cell has 10% more opacity with each interaction
//Size of grid is a constant 960px
//Size represent number of cells in each row and column
function createGrid(size){
  const container = document.querySelector(".container");
  const CONTAINER_WIDTH = 960;
  container.style.width = CONTAINER_WIDTH + "px";

  for (let i = 0; i < size * size; i++){
    const cell = document.createElement("div");
    let opacity = 0;

    cell.classList.add("cell");
    container.appendChild(cell);

    cell.style.width = CONTAINER_WIDTH/size + "px";
    cell.style.height = CONTAINER_WIDTH/size + "px";
  
    cell.addEventListener("mouseover", (event)=>{
      event.target.classList.add("enter");

      opacity += 10;
      cell.style.opacity = opacity + "%";
    });
  
    cell.addEventListener("mouseleave", (event)=>{
      event.target.classList.remove("enter");

      //Makes cell a random color after cursor leaves
      const rgb = randomColor();
      cell.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1]+ ", " + rgb[1] + ")"
    });
  }
}

//Remove all cells
function clearGrid(){
  const cells = document.querySelectorAll(".cell");
  for (const cell of cells){
    cell.parentNode.removeChild(cell);
  }
}

//Generate random integer from 0 inclusive to n inclusive
function random (n){
  return Math.floor(Math.random()*(n+1));
}

//Generate random rgb color represented by an array of three numbers
function randomColor(){
  const red = random(255);
  const green = random(255);
  const blue = random(255);
  return [red, green, blue];
}

