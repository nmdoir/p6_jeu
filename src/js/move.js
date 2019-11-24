import { Player } from "../js/player";

class Move {

    availableMove() {
        let player = new Player;
        this.playerTab = player.getPlayerTab();
        let td = null;
        for (let i = 0; i < 2; i++) {
            let currentCell = document.getElementById(this.playerTab[i].position);
            for (let browseCells = 0; browseCells < 100; browseCells++) {
                if (browseCells < 10) {
                    td = 'td-0'
                } else {
                    td = 'td-'
                }
            let nextCell = document.getElementById(td + browseCells);
                if ((currentCell.dataset.y === nextCell.dataset.y && currentCell.dataset.x === (nextCell.dataset.x -3 || nextCell.dataset.x -2 || nextCell.dataset.x -1 || nextCell.dataset.x +1 || nextCell.dataset.x +2 || nextCell.dataset.x +3)) || (currentCell.dataset.x === nextCell.dataset.x && currentCell.dataset.y === (nextCell.dataset.y -3 || nextCell.dataset.y -2 || nextCell.dataset.y -1 || nextCell.dataset.y +1 || nextCell.dataset.y +2 || nextCell.dataset.y +3))) {
                nextCell.setAttribute('data-playeraccess', 1);
                }
            }
        }
    }
}

        /*let currentCell1 = document.querySelector("td[data-player=player1]");
        let cell = document.getElementsByClassName("tdstyle");
        let nextCell = currentCell1.dataset.x;
        for (let availableY = 0; availableY < 10 ; availableY++) {
            for (let availableX = 0; availableX < 10; availableX++) {
                let nextCell = (Number(cell.dataset.x) === availableX) && (Number(cell.dataset.y) === availableY);
                if ((Number(currentCell.dataset.y) === availableY && Number(currentCell.dataset.x) === (availableX-3 || availableX-2 || availableX-1 || availableX+1 || availableX+2 || availableX+3)) || (Number(currentCell.dataset.x) === availableX && Number(currentCell.dataset.y) === (availableY-3 || availableY-2 || availableY-1 || availableY+1 || availableY+2 || availableY+3))) {
                nextCell.setAttribute('data-playeraccess', 1);
                }
            }
        }

        for (let availableY = 0; availableY < 10 ; availableY++) {
                    for (let availableX = 0; availableX < 10; availableX++) {
                        let nextCell = (Number(cell.dataset.x) === availableX) && (Number(cell.dataset.y) === availableY);
                        if ((Number(currentCell.dataset.y) === availableY && Number(currentCell.dataset.x) === (availableX-3 || availableX-2 || availableX-1 || availableX+1 || availableX+2 || availableX+3)) || (Number(currentCell.dataset.x) === availableX && Number(currentCell.dataset.y) === (availableY-3 || availableY-2 || availableY-1 || availableY+1 || availableY+2 || availableY+3))) {
                            nextCell.setAttribute('data-playeraccess', 1);
                        }
                    }
            }*/


export { Move };