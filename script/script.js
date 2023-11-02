createGrid(16);

function createGrid(size){
	const contentContainer = document.querySelector("#content");
	for (let row = 0; row < size; row++){
		
		//size of grid in respect with 90% of width screen
		const WIDTH = 70;
		const percent = Math.floor(WIDTH/size);
		const rowContainer = document.createElement("div");
		rowContainer.setAttribute("style", `display: flex; justify-content: center; width:${WIDTH}%; flex-basis: ${percent}%;`);
		for (let col = 0; col < size; col++){
			const square = document.createElement("div");
			const widthSquare = rowContainer.clientHeight;
			square.setAttribute("style",
			`padding-bottom: ${percent}%; flex-basis: ${percent}%; border: 1px solid black`);
			rowContainer.appendChild(square);
		}
		contentContainer.appendChild(rowContainer);
	}
	return;
}

