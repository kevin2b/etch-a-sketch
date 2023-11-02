const enter = function enter (e){
	e.target.style["background-color"] = "yellow";
	return;
}

const leave = function leave (e){
	e.target.style["background-color"] = "black";
	return;
}

const resetButton = document.querySelector("#reset");
const contentContainer = document.querySelector("#content");

createGrid(16);

resetButton.addEventListener("click", () => {
	let sol = prompt("Enter the size (1-100) of the grid in terms of number of squares.");
	if (sol === null || sol === ""){
		return;
	}
		
	if(+sol >= 1 && +sol <= 100){
		resetGrid();
		createGrid(sol);
		return;
	}
	else{
		alert("Invalid input. Enter a number between 1 and 100 inclusive.");
	}
	
})

function resetGrid(){
	while (contentContainer.firstChild){
		contentContainer.removeChild(contentContainer.firstChild);
	}
	return;
}

//Create size by size square grid for etch-a-sketch
function createGrid(size){
	for (let row = 0; row < size; row++){	
		const WIDTH = 50;
		const percent = WIDTH/size;
		const rowContainer = document.createElement("div");
		rowContainer.setAttribute("style", `display: flex; justify-content: center; width:${WIDTH}%; flex: 0 0 ${percent}%;`);
		for (let col = 0; col < size; col++){
			const square = document.createElement("div");
			square.setAttribute("style",
			`padding-bottom: ${percent}%; flex: 0 0 ${percent}%; border: 1px solid black; `);
			rowContainer.appendChild(square);
			square.addEventListener("mouseenter", enter);
			square.addEventListener("mouseleave", leave);
		}
		contentContainer.appendChild(rowContainer);
	}
	return;
}

