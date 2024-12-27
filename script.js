const mainContainer = document.querySelector('#container');
const body = document.querySelector('body');

const gridDefault = () => {
    for(i = 0; i < 16; i++) {
        for(j = 0; j < 16; j++) {
            const row = document.createElement("div");
            row.classList.add('grid-div');
            mainContainer.appendChild(row);
        }
    }
}

gridDefault();
