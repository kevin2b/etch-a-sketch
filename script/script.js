const enter = function enter (e){
	e.target.style["background-color"] = "yellow";
	return;
}

const leave = function leave (e){
	e.target.style["background-color"] = "black";
	return;
}

createGrid(16);

//Create size by size square grid for etch-a-sketch
function createGrid(size){
	const contentContainer = document.querySelector("#content");
	
	for (let row = 0; row < size; row++){	
		//Size of grid in respect with 90% of width screen
		const WIDTH = 70;
		const percent = Math.floor(WIDTH/size);
		const rowContainer = document.createElement("div");
		rowContainer.setAttribute("style", `display: flex; justify-content: center; width:${WIDTH}%; flex-basis: ${percent}%;`);
		for (let col = 0; col < size; col++){
			const square = document.createElement("div");
			square.setAttribute("style",
			`padding-bottom: ${percent}%; flex-basis: ${percent}%; border: 1px solid black;`);
			rowContainer.appendChild(square);
			square.addEventListener("mouseenter", enter);
			square.addEventListener("mouseleave", leave);
		}
		contentContainer.appendChild(rowContainer);
	}
	return;
}

