// Get reference to HTML elements and variables
const board = document.querySelector('.board');
const buttonElement = document.querySelector("#gridSizeButton");

// Function to change the grid size
function changeGridSize(cellSize, gridSize) {
    // Clear the existing grid
    board.innerHTML = ''; 

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.style.width = `${cellSize}px`; 
        gridDiv.style.height = `${cellSize}px`;
        gridDiv.style.border = '1px dotted grey';
        gridDiv.style.margin = '0'; 
        gridDiv.style.padding = '0';

        // Event listener for the mouse hover effect

        gridDiv.addEventListener('mouseover', function() {
            gridDiv.style.backgroundColor = getRandomColor();
        });

        board.appendChild(gridDiv);
    }
    // Set board dimensions based on the grid size and cell size
    board.style.width = `${(cellSize+2) * gridSize}px`;
    board.style.height = `${(cellSize+2) * gridSize}px`;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for the button
buttonElement.addEventListener("click", function() {
    const gridSizeInput = prompt('Please enter the grid size:');
    // Parse the grid size as an integer
    const gridSize = parseInt(gridSizeInput, 10);
    
    if (!isNaN(gridSize) && gridSize > 0 && gridSize < 101) {
        changeGridSize(cellSize, gridSize);
    } else {
        alert('Invalid grid size. Please enter a positive number less than or equal to 100.');
    }
});

// Default cellSize and gridSize
let cellSize = 5;
let gridSize = 50;

// Create the default grid
changeGridSize(cellSize, gridSize);
