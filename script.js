// Create a webpage with a 16x16 grid of square divs.

// 16x6 grid of divs

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

console.log(container);

// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// Use flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research/use CSS Grid for this as Grid will be taught later after the foundations course. This is an opportunity specifically to get more practice in for flexbox!
// Be careful with borders and margins, as they can adjust the size of the squares!
// “OMG, why isn’t my grid being created???”
// Did you link your CSS stylesheet?
// Open your browser’s developer tools.
// Check if there are any errors in the JavaScript console.
// Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
// Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
