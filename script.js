//query selectors
const container = document.querySelector("#container");

// create a 16x16 grid
function createGrid() {
	for (let i = 0; i < 256; i++) {
		const div = document.createElement("div");
		div.classList.add("gridCell");
		// div.textContent = "x";

		container.appendChild(div);
	}
}
createGrid();

const cells = document.querySelectorAll(".gridCell");

cells.forEach((cell) => {
	cell.addEventListener("mouseenter", () => {
		cell.style.backgroundColor = "blue";
	});
});

console.log(cells);

console.log(container);

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

function changeDivColor() {}
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// Adding a new class to the div.
// Changing the div’s background color using JavaScript.
