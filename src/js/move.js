import { Player } from "../js/player";

class Move {

    //TODO: change weapon images to png (to have grey background when accessible)
    //TODO: no access after obstacles

    availableMove(playerTab) {
        let td = null;
        for (let browseCells = 0; browseCells < 100; browseCells++) {
            if (browseCells < 10) {
                td = 'td-0'
            } else {
                td = 'td-'
            }
            document.getElementById(td + browseCells).removeAttribute('data-playeraccess');
        }
        let availableCell = null;
        for (let i = 0; i < playerTab.length; i++) {
            let playerCell = document.getElementById(playerTab[i].position);
            let playerMove = playerTab[i].move;
            console.log(playerMove);
            for (let browseCells = 0; browseCells < 100; browseCells++) {
                if (browseCells < 10) {
                    td = 'td-0'
                } else {
                    td = 'td-'
                }
                availableCell = document.getElementById(td + browseCells);
                if (
                    (
                        (playerTab[i].move === true) &&
                        (playerCell.dataset.y === availableCell.dataset.y) &&
                        (availableCell.dataset.x >= (Number(playerCell.dataset.x) - 3)) &&
                        (availableCell.dataset.x <= (Number(playerCell.dataset.x) + 3)) &&
                        (availableCell.dataset.x !== playerCell.dataset.x) &&
                        (!availableCell.hasAttribute('data-access'))
                    )
                    ||
                    (
                        (playerTab[i].move === true) &&
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
        let player = null;
        for (let i = 0; i < playerTab.length; i++) {
            if (playerTab[i].move === true) {
                player = playerTab[i];
            }
        }
        let currentCell = document.getElementById(player.position);
        let nextCell = document.getElementById(cellId);
        this.playerMove(nextCell, currentCell, player, playerTab);

        return playerTab;
    }


    playerMove(nextCell, currentCell, player, playerTab) {
        let newPlayer = new Player();
        if (nextCell.dataset.playeraccess === "1"
            && nextCell.id !== currentCell.id) {

            //Update player position
            nextCell.setAttribute('data-player', player.id);
            player.position = nextCell.id;

            //Remove last position
            currentCell.removeAttribute('data-player');

            newPlayer.allowMove(playerTab);

            return true;
        }
        return false;
    }
}


export { Move };



