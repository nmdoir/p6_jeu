import { Player } from "../js/player";

class Move {

    //TODO: no access after obstacles

    availableMove(playerTab) {
        let td = null;
        for (let browseCells = 0; browseCells < 100; browseCells++) {
            td = this.checkTd(browseCells)[0];
            document.getElementById(td + browseCells).removeAttribute("data-playeraccess");
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
                    td = this.checkTd(availableId)[0];
                    availablePos = td + availableId;
                    availableCell = document.getElementById(availablePos);

                    if (availableId >= 0 && availableId < 100) {
                        if (
                            playerTab[i].move === true &&
                            availableCell.dataset.y === playerCell.dataset.y &&
                            !availableCell.hasAttribute("data-access") &&
                            !availableCell.hasAttribute("data-player") &&
                            !availableCell.hasAttribute("data-playeraccess")
                        ) {
                            availableCell.setAttribute("data-playeraccess", 1);
                        } else if (
                            playerTab[i].move === true &&
                            availableCell.dataset.y === playerCell.dataset.y &&
                            availableId >= 1 &&
                            (
                                availableCell.hasAttribute("data-access") ||
                                availableCell.hasAttribute("data-player") ||
                                availableCell.hasAttribute("data-playeraccess")
                            )
                        ) {
                            noGoCell = document.getElementById(td + (Number(availableId) - 1));
                            if (noGoCell !== null) {
                                noGoCell.setAttribute("data-playeraccess", 0);
                            }
                        }
                    }
                }


                for (availableId = Number(playerId) + 1; availableId <= Number(playerId) + 3; availableId++) {
                    td = this.checkTd(availableId)[0];
                    availablePos = td + availableId;
                    availableCell = document.getElementById(availablePos);

                    if (availableId >= 0 && availableId < 100) {
                        if (
                            playerTab[i].move === true &&
                            availableCell.dataset.y === playerCell.dataset.y &&
                            !availableCell.hasAttribute("data-access") &&
                            !availableCell.hasAttribute("data-player") &&
                            !availableCell.hasAttribute("data-playeraccess")
                        ) {
                            availableCell.setAttribute("data-playeraccess", 1);
                        } else if (
                            playerTab[i].move === true &&
                            availableCell.dataset.y === playerCell.dataset.y &&
                            availableId < 99 &&
                            (
                                availableCell.hasAttribute("data-access") ||
                                availableCell.hasAttribute("data-player") ||
                                availableCell.hasAttribute("data-playeraccess")
                            )
                        ) {
                            noGoCell = document.getElementById(td + (Number(availableId) + 1));
                            if (noGoCell !== null) {
                                noGoCell.setAttribute("data-playeraccess", 0);
                            }
                        }
                    }
                }

                let verticals = [10, 20, 30];
                //Cases autorisées vers le haut
                for (let jump of verticals) {
                    availableId = Number(playerId) - Number(jump);
                    td = this.checkTd(availableId)[1];
                    availablePos = td + availableId;
                    availableCell = document.getElementById(availablePos);

                    if (availableId >= 0 && availableId < 100) {
                        if (
                            playerTab[i].move === true &&
                            availableCell.dataset.x === playerCell.dataset.x &&
                            !availableCell.hasAttribute("data-access") &&
                            !availableCell.hasAttribute("data-player") &&
                            !availableCell.hasAttribute("data-playeraccess")
                        ) {
                            availableCell.setAttribute("data-playeraccess", 1);
                        }
                        else if (
                            playerTab[i].move === true &&
                            availableCell.dataset.x === playerCell.dataset.x &&
                            availableId >= 10 &&
                            (
                                availableCell.hasAttribute("data-access") ||
                                availableCell.hasAttribute("data-player") ||
                                availableCell.hasAttribute("data-playeraccess")
                            )
                        ) {
                            noGoCell = document.getElementById(td + (Number(availableId) - 10));
                            noGoCell.setAttribute("data-playeraccess", 0);
                        }
                    }
                }

                //Cases autorisées vers le bas
                for (let jump of verticals) {
                    availableId = Number(playerId) + Number(jump);
                    td = this.checkTd(availableId)[1];
                    availablePos = td + availableId;
                    availableCell = document.getElementById(availablePos);

                    if (availableId >= 0 && availableId < 100) {
                        if (
                            playerTab[i].move === true &&
                            availableCell.dataset.x === playerCell.dataset.x &&
                            !availableCell.hasAttribute("data-access") &&
                            !availableCell.hasAttribute("data-player") &&
                            !availableCell.hasAttribute("data-playeraccess")
                        ) {
                            availableCell.setAttribute("data-playeraccess", 1);
                        } else if (
                            availableId < 90 &&
                            playerTab[i].move === true &&
                            availableCell.dataset.x === playerCell.dataset.x &&
                            (
                                availableCell.hasAttribute("data-access") ||
                                availableCell.hasAttribute("data-player") ||
                                availableCell.hasAttribute("data-playeraccess")
                            )
                        ) {
                            noGoCell = document.getElementById(td + (Number(availableId) + 10));
                            noGoCell.setAttribute("data-playeraccess", 0);
                        }
                    }
                }
            }

        }

        else {
            player.allowFight(playerTab);
        }
    }

    checkTd(availableId) {
        let tdTab = [];
        if (availableId < 10) {
            tdTab[0] = 'td-0'
        }
        else if (availableId >= 10 && availableId < 20)
        {
            tdTab[0] = 'td-';
            tdTab[1] = 'td-0';
        }
        else {
            tdTab[0] = 'td-';
            tdTab[1] = 'td-';
        }
        return tdTab;
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
            nextCell.setAttribute("data-player", player.id);
            player.position = nextCell.id;

            //Update player weapon and weapon shown in the cell
            if (nextCell.hasAttribute("data-weapon")) {
                if (oldWeapon === null) {
                    player.weapon = nextCell.dataset.weapon;
                    nextCell.removeAttribute("data-weapon");
                }
                else {
                    player.weapon = nextCell.dataset.weapon;
                    nextCell.dataset.weapon = oldWeapon;
                }
            }

            //Remove last position
            currentCell.removeAttribute("data-player");

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



