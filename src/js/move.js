import { Player } from "../js/player";

class Move {

    //TODO: change weapon images to png (to have grey background when accessible)
    //TODO: no access after obstacles

    availableMove(playerTab) {
        let td = null;
        let availableCell = null;
        for (let i = 0; i < playerTab.length; i++) {
            let playerCell = document.getElementById(playerTab[i].position);
            for (let browseCells = 0; browseCells < 100; browseCells++) {
                if (browseCells < 10) {
                    td = 'td-0'
                } else {
                    td = 'td-'
                }
                availableCell = document.getElementById(td + browseCells);
                if (
                    (
                        (playerCell.dataset.y === availableCell.dataset.y) &&
                        (availableCell.dataset.x >= (Number(playerCell.dataset.x) - 3)) &&
                        (availableCell.dataset.x <= (Number(playerCell.dataset.x) + 3)) &&
                        (availableCell.dataset.x !== playerCell.dataset.x) &&
                        (!availableCell.hasAttribute('data-access'))
                    )
                    ||
                    (
                        (playerCell.dataset.x === availableCell.dataset.x) &&
                        (availableCell.dataset.y >= (Number(playerCell.dataset.y) - 3)) &&
                        (availableCell.dataset.y <= (Number(playerCell.dataset.y) + 3)) &&
                        (availableCell.dataset.y !== playerCell.dataset.y) &&
                        (!availableCell.hasAttribute('data-access'))
                    )
                ) {
                        availableCell.setAttribute('data-playeraccess', 1);
                }
            }
        }
    }
    move(cellId, playerTab) {
        console.log(playerTab);
        let player = null;
        for (let i = 0; i < 2; i++) {
            //if (playerTab[i].move === true) {}
            player = playerTab[i];
            let currentCell = document.getElementById(player[i].position);
            let nextCell = document.getElementById(cellId);
            this.playerMove(nextCell, currentCell, player);
        }
    }


    playerMove(nextCell, currentCell, player) {
        //const limit = 3;
        if (nextCell.dataset.playeraccess === "1"
            && nextCell.id !== currentCell.id) {

            nextCell.setAttribute('data-player', player.id)
            currentCell.removeAttribute('data-player');

            player.position = nextCell.id;
            player.countMove++;
        }
    }
}


export { Move };



