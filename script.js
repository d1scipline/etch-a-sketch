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


draw_grid(16);

let gridElements = document.querySelectorAll(".grid-element");
for (let i = 0; i < gridElements.length; i++) {
    gridElements[i].addEventListener("click", (event) => {
        event.target.style.backgroundColor = "black";
    });
}