let color = true;
console.time("if");
let mainContainer = document.createElement("div")
mainContainer.className = "mainContainer"
document.body.appendChild(mainContainer)

// create the rows
for (let i = 0; i < 8; i++) {
	let boxContainer = document.createElement("div");
	boxContainer.className = "boxContainer";
	mainContainer.appendChild(boxContainer);
    	for (let z = 0; z < 8; z++) {
		let box = document.createElement("div");
		if (i % 2 === 0) {
			if (color === true) {
				box.className = "black";
				color = false;
			} else {
				box.className = "white";
				color = true;
			}
		} else {
			if (color === false) {
				box.className = "black";
				color = true;
			} else {
				box.className = "white";
				color = false;
			}
		}

		boxContainer.appendChild(box);
	}
}
console.timeEnd("if");

