//query selectors
const container = document.querySelector("#container");
const button = document.querySelector("#adjust-size");

function getUserInput() {
	return prompt("Please enter a grid size");
}

button.addEventListener("click", getUserInput);
let userInput = getUserInput();
// create a 16x16 grid
function createGrid() {
	for (let i = 0; i < userInput; i++) {
		const div = document.createElement("div");
		div.classList.add("gridCell");

		container.appendChild(div);
	}
}
createGrid();

const cells = document.querySelectorAll(".gridCell");

function changeDivColor() {
	cells.forEach((cell) => {
		cell.addEventListener("mouseenter", () => {
			cell.style.backgroundColor = "blue";
		});
	});
}
changeDivColor();

// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
