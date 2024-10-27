
// Task: Create an 8x8 grid with alternating spaces and '#' symbols.
let gridSize = 8; // Size of the grid

for (let row = 0; row < gridSize; row++) {
    let rowPattern = "";
    for (let col = 0; col < gridSize; col++) {
        // Alternate between '#' and ' ' based on the row and column indices
        if ((row + col) % 2 === 0) {
            rowPattern += "#";
        } else {
            rowPattern += " ";
        }
    }
    console.log(rowPattern);
}
