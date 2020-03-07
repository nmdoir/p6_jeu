import { Player } from "../js/player";
import { GenGrid } from "../js/genGrid";
import { rowWanted, colWanted } from "./index";

class Move {

    availableMove(playerTab) {
        let td = null;
        let grid = new GenGrid(rowWanted, colWanted);
        for (let browseCells = 0; browseCells < grid.gridLength; browseCells++) {
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
                    let cellNb = Number(grid.gridLength - 1);
                    this.checkCellsAround(playerTab, i, td, availableId, "y", playerCell, "right",
                        cellNb, noGoCellId);
                }

                //Pour la gestion des déplacements haut/bas, on crée un array
                let verticals = [colWanted, colWanted * 2, colWanted * 3];

                //Cases autorisées vers le haut
                for (let jump of verticals) {
                    availableId = Number(playerId) - Number(jump);
                    noGoCellId = Number(availableId) - Number(colWanted);
                    let cellNb = grid.column;
                    this.checkCellsAround(playerTab, i, td, availableId, "x", playerCell, "up",
                        cellNb, noGoCellId);
                }

                //Cases autorisées vers le bas
                for (let jump of verticals) {
                    availableId = Number(playerId) + Number(jump);
                    noGoCellId = Number(availableId) + Number(colWanted);
                    let cellNb = (grid.row - 1) * grid.column;
                    this.checkCellsAround(playerTab, i, td, availableId, "x", playerCell, "down", cellNb, noGoCellId);
                }
            }
        }

        //Si les 2 joueurs sont sur des cases adjacentes, on déclenche le combat
        else {
            player.allowFight(playerTab);
        }
    }

    checkTd(availableId) {
        let grid = new GenGrid(rowWanted, colWanted);
        let tdTab = [];
        if (availableId >= 0 && availableId < grid.gridLength) {
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
        let grid = new GenGrid(rowWanted, colWanted);
        td = this.checkTd(availableId)[0];
        let availablePos = td + availableId;
        let availableCell = document.getElementById(availablePos);
        //La case n+2/n-2, utilisée pour empêcher l'accès s'il y a un obstacle en n+1/n-1
        let noGoCell = null;

        if (availableId >= 0 && availableId < grid.gridLength) {
            if (
                playerTab[i].move === true &&
                //On vérifie que la case étudiée est sur le même axe que la case du joueur
                this.checkAxis(availableCell, playerCell, direction) === true &&
                //Et qu'elle n'est pas inaccessible
                !availableCell.hasAttribute("data-access") &&
                !availableCell.hasAttribute("data-player") &&
                !availableCell.hasAttribute("data-playeraccess")
            ) {
                availableCell.setAttribute("data-playeraccess", 1);
            } else if (
                //Si elle est inaccessible,
                playerTab[i].move === true &&
                this.checkAxis(availableCell, playerCell, direction) === true &&
                //On vérifie que noGoCellId reste entre 0 et fin du tableau pour éviter les erreurs de sortie de tableau
                this.checkNoGoCell(availableId, direction, cellNb) === true &&
                //et qu'il y a bien l'un des 3 obstacles
                (
                    availableCell.hasAttribute("data-access") ||
                    availableCell.hasAttribute("data-player") ||
                    availableCell.hasAttribute("data-playeraccess")
                )
            ) {
                if (direction === "up" || direction === "down") {
                    //On utilise le td adapté à noGoCell
                    td = this.checkTd(availableId)[1];
                }
                noGoCell = document.getElementById(td + noGoCellId);
                //On empêche l'accès à la case suivante puisqu'il y a un obstacle en n+1/n-1
                if (noGoCell !== null) {
                    noGoCell.setAttribute("data-playeraccess", 0);
                }
            }
        }
    }

    //On vérifie que la case étudiée est bien sur le même x/y que la case du joueur pour éviter les erreurs de bord de tableau (accès à la ligne/colonne suivante/précédente)
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

    //On met à jour les infos des joueurs (playerTab) après le clic avec la nouvelle position
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

            //On met à jour la position du joueur
            nextCell.setAttribute("data-player", player.id);
            player.position = nextCell.id;

            //On met à jour l'arme du joueur et l'arme déposée sur la case
            if (nextCell.hasAttribute("data-weapon")) {
                player.weapon = nextCell.dataset.weapon;
                nextCell.dataset.weapon = oldWeapon;
            }

            //On supprime l'ancienne position du joueur sur le plateau
            currentCell.removeAttribute("data-player");

            //On change le joueur qui doit jouer ensuite
            newPlayer.allowMove(playerTab);

            return true;
        }
        return false;
    }

    //Vérifie si les 2 joueurs sont côte à côte (renvoie true), pour déclencher le combat
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



