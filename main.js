initializeButton();
createGrid(16);

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
function createGrid(size){
  const container = document.querySelector(".container");
  const CONTAINER_WIDTH = 960;
  container.style.width = CONTAINER_WIDTH + "px";

  for (let i = 0; i < size * size; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);

    cell.style.width = CONTAINER_WIDTH/size + "px";
    cell.style.height = CONTAINER_WIDTH/size + "px";
  
    cell.addEventListener("mouseover", (event)=>{
      event.target.classList.add("enter");
    });
  
    cell.addEventListener("mouseleave", (event)=>{
      event.target.classList.remove("enter");
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

