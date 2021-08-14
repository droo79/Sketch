// Default Settings
var color = 'black';
gridSize(16);

// Sets up a CSS Grid of size n squared (16 * 16 = 256 sqaures)
function gridSize(n) {
    const grid = document.getElementById('container');
    // Grid is adaptive and always equal on rows & columns using repeat & 1fr
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`
    let gridXY = n * n;

    // Creates divs to act as the rows/columns for the CSS Grid
    for (let i = 0; i < gridXY; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        rows.style.opacity = '1';
        rows.addEventListener('mouseenter', bgColor);
        container.appendChild(rows);
    }
}

// Sets background color for the grid squares, dependent on button selected
function bgColor () {
    if (color == 'black')
    {
        this.style.backgroundColor = 'black';
    }
    else if (color == 'rainbow')
    {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    }
    else if (color == 'shader')
    {
        shade = this.style.opacity;
        shade = shade - 0.1;
        this.style.opacity = shade;
    }
    else if (color == 'eraser')
    {
        this.style.backgroundColor = 'white';
        this.style.opacity = 1;
    }
}

// Sets up buttons and their related functions
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearColor);

function clearColor () {
    container.innerHTML = '';
    // Max is 100 to prevent long load times
    var size = prompt("How many squares per side? Max is 100");
    if (size > 100)
    {
        size = 100;
    }
    gridSize(size);
}

const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', rainbowColor);

function rainbowColor() {
    color = 'rainbow';
}

const shaderButton = document.getElementById('shader');
shaderButton.addEventListener('click', shaderColor);

function shaderColor() {
    color = 'shader';
}

const eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', eraserColor);

function eraserColor() {
    color = 'eraser';
}

