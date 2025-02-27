const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++){
  const cell = document.createElement("div");
  cell.classList.add("cell");

  container.appendChild(cell);

  cell.addEventListener("mouseover", (event)=>{
    event.target.classList.add("enter");
  });

  cell.addEventListener("mouseleave", (event)=>{
    event.target.classList.remove("enter");
  });
}

