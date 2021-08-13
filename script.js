var color = 'black';

const container = document.querySelector('#container');
gridSize(16);

function gridSize(n) {
    const grid = document.getElementById('container');
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`
    let gridXY = n * n;

    for (let i = 0; i < gridXY; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        rows.addEventListener('mouseenter', bgColor);
        container.appendChild(rows);
    }
}

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
}
    
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearColor);

function clearColor () {
    container.innerHTML = '';
    var size = prompt("How many squares per side?");
    gridSize(size);
}

const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', rainbowColor);

function rainbowColor() {
    color = 'rainbow';
}
      