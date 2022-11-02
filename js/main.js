function renderBoard(cellNumber) {
    for (let i = 1; i <= cellNumber ; i++) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("board-number");
        boardCell.addEventListener("click" , function () {
            this.classList.add("number-selected");
        })
        boardContainer.append(boardCell);
        
    }
}
const play = document.getElementById('play');
const level = document.getElementById('level');
const boardContainer = document.querySelector(".board")


boardContainer.innerHTML = "";


play.addEventListener("click" , function() {
    
    renderBoard(level.value)
   
    
    // se level e uguale ad easy allora creo un ciclo for che mi crea 100 caselle 
    // se level e uguale a medium allora creo un ciclo fo che mi crea 81 caselle 
    // invece se level e uguale ad hard allora creo un ciclo for che mi crea 49 caselle 
    
})
