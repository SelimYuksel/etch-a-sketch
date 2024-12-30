const mainContainer = document.querySelector('#container');
const body = document.querySelector('body');
const grids = document.querySelectorAll('.grid-div');
const sizeBtn = document.querySelector('#size-button');

const randomRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

const over = (event) => {
    event.currentTarget.style.backgroundColor = randomRgb();
};

const out = (event) => {
    const currentColor = event.currentTarget.style.backgroundColor;
    const match = currentColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
    if(match) {
        let [_, r, g, b] = match.map(Number);
        r = Math.max(0, Math.floor(r * 0.9));
        g = Math.max(0, Math.floor(g * 0.9));
        b = Math.max(0, Math.floor(b * 0.9));
        event.currentTarget.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

const gridGenerator = (rows, cols) => {
    for(i = 0; i < rows; i++) {
        for(j = 0; j < cols; j++) {
            const row = document.createElement("div");
            const size = 480 / rows;
            row.classList.add('grid-div');
            row.style.width = `${size}px`;
            row.style.height = `${size}px`;
            row.addEventListener('mouseover', over);
            row.addEventListener('mouseout', out);
            mainContainer.appendChild(row);
        }
    }
}

const clearGrid = () => {
    while(mainContainer.firstChild) {
        mainContainer.firstChild.remove();
    }
}


sizeBtn.addEventListener('click', () => {
    let userInput;
    do {
        userInput = prompt('Enter a size between 1 and 100');
        if(userInput === null) return;
    } while(Number(userInput) > 100 || Number(userInput) <= 0);
    
    clearGrid();
    gridGenerator(userInput, userInput);
})

gridGenerator(16, 16);
