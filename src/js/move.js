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
                        (Number(availableCell.dataset.access) !== 0)
                    )
                    ||
                    (
                        (playerCell.dataset.x === availableCell.dataset.x) &&
                        (availableCell.dataset.y >= (Number(playerCell.dataset.y) - 3)) &&
                        (availableCell.dataset.y <= (Number(playerCell.dataset.y) + 3)) &&
                        (availableCell.dataset.y !== playerCell.dataset.y) &&
                        (Number(availableCell.dataset.access) !== 0)
                    )
                ) {
                        availableCell.setAttribute('data-playeraccess', 1);
                }
            }
        }
    }
//&& (availableCell.dataset.x >= (playerCell.dataset.x - 3))
    // availableCell.dataset.x + 3)) || (playerCell.dataset.x === availableCell.dataset.x && playerCell.dataset.y === (availableCell.dataset.y - 3 || availableCell.dataset.y - 2 || availableCell.dataset.y - 1 || availableCell.dataset.y + 1 || availableCell.dataset.y + 2 || availableCell.dataset.y + 3))
    /*move(cellId, playerTab) {
        let player = null;

        for (let i = 0; i < 2; i++) {
            if (playerTab[i].move === true) {
                player = playerTab[i];
            }
        }

        let currentCell = document.getElementById(player.position);
        let nextCell = document.getElementById(cellId);
        this.playerMove(nextCell, currentCell, player);
        return playerTab;
    }


    playerMove(nextCell, currentCell, player) {
        //const limit = 3;
        if ((currentCell.dataset.y === nextCell.dataset.y
            && currentCell.dataset.x === (nextCell.dataset.x - 3 || nextCell.dataset.x - 2 || nextCell.dataset.x - 1 || nextCell.dataset.x + 1 || nextCell.dataset.x + 2 || nextCell.dataset.x + 3)) || (currentCell.dataset.x === nextCell.dataset.x && currentCell.dataset.y === (nextCell.dataset.y - 3 || nextCell.dataset.y - 2 || nextCell.dataset.y - 1 || nextCell.dataset.y + 1 || nextCell.dataset.y + 2 || nextCell.dataset.y + 3))
            && nextCell.id !== currentCell.id
            && !nextCell.hasAttribute('data-player')
            && !nextCell.hasAttribute('data-access')) {

            nextCell.setAttribute('data-player', player.id)
            currentCell.removeAttribute('data-player');

            player.position = nextCell.id;
            player.countMove++;
        }
    }*/
}


export { Move };



