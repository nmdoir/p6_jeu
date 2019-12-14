import { Player } from "../js/player";

class Move {

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
        for (let i = 0; i < 2; i++) {
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
                        (playerTab[i].move === true) &&
                        (playerCell.dataset.y === availableCell.dataset.y) &&
                        (availableCell.dataset.x >= (Number(playerCell.dataset.x) - 3)) &&
                        (availableCell.dataset.x <= (Number(playerCell.dataset.x) + 3)) &&
                        (availableCell.dataset.x !== playerCell.dataset.x) &&
                        (!availableCell.hasAttribute('data-access')) &&
                        (!availableCell.hasAttribute('data-player'))
                    )
                    ||
                    (
                        (playerTab[i].move === true) &&
                        (playerCell.dataset.x === availableCell.dataset.x) &&
                        (availableCell.dataset.y >= (Number(playerCell.dataset.y) - 3)) &&
                        (availableCell.dataset.y <= (Number(playerCell.dataset.y) + 3)) &&
                        (availableCell.dataset.y !== playerCell.dataset.y) &&
                        (!availableCell.hasAttribute('data-access')) &&
                        (!availableCell.hasAttribute('data-player'))

                    )
                ) {
                    availableCell.setAttribute('data-playeraccess', 1);

                    /* for (let j = 1; j <= 3; j++) {
                        while (
                            (playerCell.dataset.y === availableCell.dataset.y) &&
                            (availableCell.dataset.x === (Number(playerCell.dataset.x) - j)) &&
                            (
                                !availableCell.hasAttribute('data-access') ||
                                !availableCell.hasAttribute('data-player')
                            )
                            ) {
                            availableCell.setAttribute('data-playeraccess', 1);
                        }
                    }
                    for (let j = 1; j <= 3; j++) {
                        while (
                            (playerCell.dataset.y === availableCell.dataset.y) &&
                            (availableCell.dataset.x === (Number(playerCell.dataset.x) + j)) &&
                            (
                                !availableCell.hasAttribute('data-access') ||
                                !availableCell.hasAttribute('data-player')
                            )
                            ) {
                            availableCell.setAttribute('data-playeraccess', 1);
                        }
                    }
                    for (let j = 1; j <= 3; j++) {
                        while (
                            (playerCell.dataset.x === availableCell.dataset.x) &&
                            (availableCell.dataset.y === (Number(playerCell.dataset.y) - j)) &&
                            (
                                !availableCell.hasAttribute('data-access') ||
                                !availableCell.hasAttribute('data-player')
                            )
                            ) {
                            availableCell.setAttribute('data-playeraccess', 1);
                        }
                    }
                    for (let j = 1; j <= 3; j++) {
                        while (
                            (playerCell.dataset.x === availableCell.dataset.x) &&
                            (availableCell.dataset.y === (Number(playerCell.dataset.y) + j)) &&
                            (
                                !availableCell.hasAttribute('data-access') ||
                                !availableCell.hasAttribute('data-player')
                            )
                            ) {
                            availableCell.setAttribute('data-playeraccess', 1);
                        }
                    }*/
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
        const oldWeapon = player.weapon;
        if (nextCell.dataset.playeraccess === "1"
            && nextCell.id !== currentCell.id) {

            //Update player position
            nextCell.setAttribute('data-player', player.id);
            player.position = nextCell.id;

            //Update player weapon and weapon shown in the cell
            if (nextCell.hasAttribute('data-weapon')) {
                if (oldWeapon === null) {
                    player.weapon = nextCell.dataset.weapon;
                    nextCell.removeAttribute('data-weapon');
                }
                else {
                    player.weapon = nextCell.dataset.weapon;
                    nextCell.dataset.weapon = oldWeapon;
                }
            }

            //Remove last position
            currentCell.removeAttribute('data-player');

            //this.getPlayerWeapon(player);
            newPlayer.allowMove(playerTab);
            
            this.getPlayer(player);


            return true;
        }
        return false;
    }

    getPlayer(player) {
        return player;
    }


}


export { Move };



