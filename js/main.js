
const boardContainer = document.querySelector(".board")

for (let i = 1; i <= 100; i++) {
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board-number");
    boardCell.addEventListener("click" , function() {
        this.classList.add("number-selected");
        console.log(this.innerHTML);
    })
    
    boardContainer.append(boardCell);
}