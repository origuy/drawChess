
let mainContainer = document.createElement("div")
mainContainer.className = "mainContainer"
document.body.appendChild(mainContainer)

for (let i = 0; i < 8; i++) {
	let boxContainer = document.createElement("div");
	boxContainer.className = "boxContainer";
	mainContainer.appendChild(boxContainer);
    	for (let z = 0; z < 8; z++) {
		let box = document.createElement("div");
		if (i % 2 === 0) {
			if (z % 2 === 0) {
				box.className = "black";
			} else {
				box.className = "white";
			}
		} else{
			if (z % 2 === 0) {
				box.className = "white";
			} else {
				box.className = "black";
			}
		}
		boxContainer.appendChild(box);
	}
}


