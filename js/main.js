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
let maxNumber = "";

boardContainer.innerHTML = "";


play.addEventListener("click" , function() {
    if(level.value === "100"){
        maxNumber = level.value
        renderBoard(maxNumber)
        console.log( level.value )
        console.log( maxNumber )
        
    }else if (level.value === "81"){
        maxNumber = level.value
        renderBoard(maxNumber)
        console.log( level.value )
        console.log( maxNumber )
    }else{
        maxNumber = level.value
        renderBoard(maxNumber)
        console.log( level.value )
        console.log( maxNumber )
    }
    //     if (level.value === "easy") {
    //         for (let i = 1; i <= 100; i++) {
    //             const boardCell = document.createElement("div");
    //             boardCell.innerHTML = i;
    //             boardCell.classList.add("board-number");
    //             boardCell.addEventListener("click" , function() {
    //                 this.classList.add("number-selected");
    //                 console.log(this.innerHTML);
    //             })
    //             boardContainer.append(boardCell);
                
    //         }
    //    } else if ( level.value == "medium"){
    //         for (let i = 1; i <= 81; i++) {
    //             const boardCell = document.createElement("div");
    //             boardCell.innerHTML = i;
    //             boardCell.classList.add("board-number");
    //             boardCell.addEventListener("click" , function() {
    //                 this.classList.add("number-selected");
    //                 console.log(this.innerHTML);
    //             })
    //             boardContainer.append(boardCell);
                
    //         }
    //    } else{
    //         for (let i = 1; i <= 49; i++) {
    //             const boardCell = document.createElement("div");
    //             boardCell.innerHTML = i;
    //             boardCell.classList.add("board-number");
    //             boardCell.addEventListener("click" , function() {
    //                 this.classList.add("number-selected");
    //                 console.log(this.innerHTML);
    //             })
    //             boardContainer.append(boardCell);
                
    //         }
    //    }
    
    // se level e uguale ad easy allora creo un ciclo for che mi crea 100 caselle 
    // se level e uguale a medium allora creo un ciclo fo che mi crea 81 caselle 
    // invece se level e uguale ad hard allora creo un ciclo for che mi crea 49 caselle 
    
})
