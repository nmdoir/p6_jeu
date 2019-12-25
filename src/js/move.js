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

        let player = new Player();
        if (this.checkIfFight(playerTab) === false) {

            for (let i = 0; i < 2; i++) {
                let availableId = null;
                let availablePos = null;
                let availableCell = null;
                let playerCell = document.getElementById(playerTab[i].position);
                let playerId = playerCell.id.split('-')[1];
                let noGoCell = null;

                for (availableId = Number(playerId) - 1; availableId >= playerId - 3; availableId--) {
                    if (availableId < 10) {
                        td = 'td-0'
                    } else {
                        td = 'td-'
                    }
                    availablePos = td + availableId;
                    availableCell = document.getElementById(availablePos);

                    if (
                        availableId >= 0 &&
                        playerTab[i].move === true &&
                        availableCell.dataset.y === playerCell.dataset.y
                    ) {
                        if (
                            !availableCell.hasAttribute('data-access') &&
                            !availableCell.hasAttribute('data-player') &&
                            !availableCell.hasAttribute('data-playeraccess')
                        ) {
                            availableCell.setAttribute('data-playeraccess', 1);
                        } else if (availableCell.hasAttribute('data-playeraccess')) {
                            noGoCell = document.getElementById(td + (Number(availableId) - 1));
                            noGoCell.setAttribute('data-playeraccess', 0);
                        }
                    }
                }

                for (availableId = Number(playerId) + 1; availableId <= Number(playerId) + 3; availableId++) {
                    if (availableId < 10) {
                        td = 'td-0'
                    } else {
                        td = 'td-'
                    }
                    availablePos = td + availableId;
                    availableCell = document.getElementById(availablePos);
                    console.log(availableId);
                    console.log("pos td " + availablePos);
                    console.log(availableCell);


                    if (
                        availableId < 100 &&
                        playerTab[i].move === true &&
                        availableCell.dataset.y === playerCell.dataset.y
                    ) {
                        console.log(document.getElementById(td + (Number(availableId) + 1)));

                        if (
                            !availableCell.hasAttribute('data-access') &&
                            !availableCell.hasAttribute('data-player') &&
                            !availableCell.hasAttribute('data-playeraccess')
                        ) {
                            availableCell.setAttribute('data-playeraccess', 1);
                        } else if (availableCell.hasAttribute('data-playeraccess')) {
                            noGoCell = document.getElementById(td + (Number(availableId) + 1));
                            noGoCell.setAttribute('data-playeraccess', 0);
                        }
                    }
                }

                let verticals = [10, 20, 30];
                for (let jump of verticals) {
                    for (availableId = Number(playerId) - Number(jump); availableId >= Number(playerId) - 30; availableId--) {
                        if (availableId < 10) {
                            td = 'td-0'
                        } else {
                            td = 'td-'
                        }
                        availablePos = td + availableId;
                        availableCell = document.getElementById(availablePos);

                        if (
                            availableId >= 0 &&
                            playerTab[i].move === true &&
                            availableCell.dataset.x === playerCell.dataset.x
                        ) {
                            if (
                                !availableCell.hasAttribute('data-access') &&
                                !availableCell.hasAttribute('data-player') &&
                                !availableCell.hasAttribute('data-playeraccess')
                            ) {
                                availableCell.setAttribute('data-playeraccess', 1);
                            } else if (availableCell.hasAttribute('data-playeraccess')) {
                                noGoCell = document.getElementById(td + (Number(availableId) - 10));
                                noGoCell.setAttribute('data-playeraccess', 0);
                            }
                        }
                    }

                    for (let jump of verticals) {
                        for (availableId = Number(playerId) + Number(jump); availableId <= Number(playerId) + 30; availableId++) {
                            if (availableId < 10) {
                                td = 'td-0'
                            } else {
                                td = 'td-'
                            }
                            availablePos = td + availableId;
                            availableCell = document.getElementById(availablePos);

                            if (
                                availableId < 100 &&
                                playerTab[i].move === true &&
                                availableCell.dataset.x === playerCell.dataset.x
                            ) {
                                if (
                                    !availableCell.hasAttribute('data-access') &&
                                    !availableCell.hasAttribute('data-player') &&
                                    !availableCell.hasAttribute('data-playeraccess')
                                ) {
                                    availableCell.setAttribute('data-playeraccess', 1);
                                } else if (availableCell.hasAttribute('data-playeraccess')) {
                                    noGoCell = document.getElementById(td + (Number(availableId) + 10));
                                    noGoCell.setAttribute('data-playeraccess', 0);
                                }
                            }
                        }
                    }
                }
            }
        }

        else {
            player.allowFight(playerTab);
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

    //Vérifie si les 2 joueurs sont côte à côte (renvoie true), pour déclencher le fight
    checkIfFight(playerTab) {
        let player1Position = document.getElementById(playerTab[0].position);
        let player2Position = document.getElementById(playerTab[1].position);

        if (
            (
                player1Position.dataset.y === player2Position.dataset.y &&
                (
                    Number(player1Position.dataset.x) === (Number(player2Position.dataset.x) + 1) ||
                    Number(player1Position.dataset.x) === (Number(player2Position.dataset.x) - 1)
                )
            )
            ||
            (
                player1Position.dataset.x === player2Position.dataset.x &&
                (
                    Number(player1Position.dataset.y) === (Number(player2Position.dataset.y) + 1) ||
                    Number(player1Position.dataset.y) === (Number(player2Position.dataset.y) - 1)
                )
            )
        ) {
            return true
        }
        else {
            return false
        }
    }


}


export { Move };



