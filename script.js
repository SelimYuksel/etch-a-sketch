const mainContainer = document.querySelector('#container');
const body = document.querySelector('body');
const grids = document.querySelectorAll('.grid-div');

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

const gridDefault = (rows, cols) => {
    for(i = 0; i < rows; i++) {
        for(j = 0; j < cols; j++) {
            const row = document.createElement("div");
            row.classList.add('grid-div');
            row.addEventListener('mouseover', over);
            row.addEventListener('mouseout', out);
            mainContainer.appendChild(row);
        }
    }
}



gridDefault(16, 16);
