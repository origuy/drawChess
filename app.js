let mainContainer = document.createElement("div");
mainContainer.className = "mainContainer";
document.body.appendChild(mainContainer);
console.time("two");
for (let i = 0; i < 8; i++) {
	let boxContainer = document.createElement("div");
	boxContainer.className = "boxContainer";
	mainContainer.appendChild(boxContainer);
	for (let z = 0; z < 8; z++) {
		let box = document.createElement("div");
		i % 2 === 0
			? z % 2 === 0
				? (box.className = "black")
				: (box.className = "white")
			: z % 2 === 0
			? (box.className = "white")
			: (box.className = "black");
		boxContainer.appendChild(box);
	}
}
console.timeEnd("two");
