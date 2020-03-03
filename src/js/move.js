import { Player } from "../js/player";

class Move {

    availableMove(playerTab) {
        let td = null;
        for (let browseCells = 0; browseCells < 100; browseCells++) {
            td = this.checkTd(browseCells)[0];
            document.getElementById(td + browseCells).removeAttribute("data-playeraccess");
        }

        let player = new Player();
        //On vérifie que les 2 joueurs ne sont pas à côté (combat)
        if (this.checkIfFight(playerTab) === false) {

            for (let i = 0; i < 2; i++) {
                let availableId = null;
                let playerCell = document.getElementById(playerTab[i].position);
                let playerId = playerCell.id.split("-")[1];
                let noGoCellId = null;

                //Cases autorisées à gauche
                for (availableId = Number(playerId) - 1; availableId >= playerId - 3; availableId--) {
                    noGoCellId = Number(availableId) - 1;
                    this.checkCellsAround(playerTab, i, td, availableId, "y", playerCell, "left", 1, noGoCellId);
                }

                //Cases autorisées à droite
                for (availableId = Number(playerId) + 1; availableId <= Number(playerId) + 3; availableId++) {
                    noGoCellId = Number(availableId) + 1;
                    this.checkCellsAround(playerTab, i, td, availableId, "y", playerCell, "right",
                        99, noGoCellId);
                }

                //Pour la gestion des déplacements haut/bas, on crée un array
                let verticals = [10, 20, 30];

                //Cases autorisées vers le haut
                for (let jump of verticals) {
                    availableId = Number(playerId) - Number(jump);
                    noGoCellId = Number(availableId) - 10;
                    this.checkCellsAround(playerTab, i, td, availableId, "x", playerCell, "up",
                        10, noGoCellId);
                }

                //Cases autorisées vers le bas
                for (let jump of verticals) {
                    availableId = Number(playerId) + Number(jump);
                    noGoCellId = Number(availableId) + 10;
                    this.checkCellsAround(playerTab, i, td, availableId, "x", playerCell, "down", 90, noGoCellId);
                }
            }
        }


        else {
            player.allowFight(playerTab);
        }
    }

    checkTd(availableId) {
        let tdTab = [];
        if (availableId >= 0 && availableId < 100) {
            if (availableId < 10) {
                tdTab[0] = "td-0";
            }
            //On a besoin de 2 cas de figure pour gérer la variable noGoCellId, qui correspond à la case n+2 (pour empêcher l'accès aux cases se situant après un obstacle, l'obstacle étant la case n+1)
            else if (availableId >= 10 && availableId < 20)
            {
                tdTab[0] = "td-";
                tdTab[1] = "td-0";
            }
            else {
                tdTab[0] = "td-";
                tdTab[1] = "td-";
            }
        }
        return tdTab;
    }

    checkCellsAround(playerTab, i, td, availableId, axis, playerCell, direction, cellNb, noGoCellId) {
        td = this.checkTd(availableId)[0];
        let availablePos = td + availableId;
        let availableCell = document.getElementById(availablePos);
        let noGoCell = null;

        if (availableId >= 0 && availableId < 100) {
            if (
                playerTab[i].move === true &&
                this.checkAxis(availableCell, playerCell, direction) === true &&
                !availableCell.hasAttribute("data-access") &&
                !availableCell.hasAttribute("data-player") &&
                !availableCell.hasAttribute("data-playeraccess")
            ) {
                availableCell.setAttribute("data-playeraccess", 1);
            } else if (
                playerTab[i].move === true &&
                this.checkAxis(availableCell, playerCell, direction) === true &&
                this.checkNoGoCell(availableId, direction, cellNb) === true &&
                (
                    availableCell.hasAttribute("data-access") ||
                    availableCell.hasAttribute("data-player") ||
                    availableCell.hasAttribute("data-playeraccess")
                )
            ) {
                if (direction === "up" || direction === "down") {
                    td = this.checkTd(availableId)[1];
                }
                noGoCell = document.getElementById(td + noGoCellId);
                if (noGoCell !== null) {
                    noGoCell.setAttribute("data-playeraccess", 0);
                }
            }
        }
    }

    checkAxis(availableCell, playerCell, direction) {
        if (
            (
                (direction === "left" || direction === "right") &&
                availableCell.dataset.y === playerCell.dataset.y
            )
            ||
            (
                (direction === "up" || direction === "down") &&
                availableCell.dataset.x === playerCell.dataset.x
            )
        ) {
        return true;
        }
    }

    checkNoGoCell(availableId, direction, cellNb) {
        if (
            (
                (direction === "left" || direction === "up") &&
                availableId >= cellNb
            )
            ||
            (
                (direction === "right" || direction === "down") &&
                availableId < cellNb
            )
        ) {
                return true;
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
            nextCell.setAttribute("data-player", player.id);
            player.position = nextCell.id;

            //Update player weapon and weapon shown in the cell
            if (nextCell.hasAttribute("data-weapon")) {
                player.weapon = nextCell.dataset.weapon;
                nextCell.dataset.weapon = oldWeapon;
            }

            //Remove last position
            currentCell.removeAttribute("data-player");

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

        return (
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
            );
    }


}


export { Move };



