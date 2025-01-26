function draw_grid(size) {
    let container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        container.appendChild(gridRow);
        for (let j = 0; j < size; j++) {
            let gridElement = document.createElement("div");
            gridElement.setAttribute("class", "grid-element");
            gridRow.appendChild(gridElement);
        }
    }    
}

function clear_screen() {
    let gridRow = document.querySelectorAll(".grid-row");
    for (let i = 0; i < gridRow.length; i++) {
        gridRow[i].remove();
    }
    let new_size = parseInt(prompt("What size do you want your grid to be?"));
    draw_grid(new_size);
    draw();
}

function draw() {
    let gridElements = document.querySelectorAll(".grid-element");
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    }
}

draw_grid(16);
draw();

let newGridButton = document.querySelector(".new-grid");
newGridButton.addEventListener("click", clear_screen);