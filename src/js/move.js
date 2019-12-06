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
        let player = null;
        let currentCell = null;
        for (let i = 0; i < playerTab.length; i++) {
            if (playerTab[i].move === true) {
                player = playerTab[i];
            }
            currentCell = document.getElementById(playerTab[i].position);
        }
        let nextCell = document.getElementById(cellId);
        this.playerMove(nextCell, currentCell, player, playerTab);
        console.log(player);
        console.log(playerTab);

        return playerTab;
    }


    playerMove(nextCell, currentCell, player, playerTab) {
        let newPlayer = new Player();
        if (nextCell.dataset.playeraccess === "1"
            && nextCell.id !== currentCell.id) {
            //Update player position
            nextCell.setAttribute('data-player', player.id);
            player.position = nextCell.id;
            player.countMove++;

            //Remove last position
            currentCell.removeAttribute('data-player');

            if (player.move === true) {
            newPlayer.allowMove(playerTab);
            }
            return true;
        }
        return false;
    }
}


export { Move };



