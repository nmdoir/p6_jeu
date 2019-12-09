import {Weapon} from "../js/weapon";
import {Player} from "../js/player";
import {Move} from "../js/move";

//import {Cell} from "./cell";

class GenGrid {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.board = document.getElementById("board");
        this.gridLength = this.row * this.column;
    }

    createGrid() {
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let move = new Move();
        let player = new Player;
        this.playerTab = player.getPlayerTab();
        this.playerTab[0].move = true;
        table.setAttribute("class", "center");
        table.appendChild(tbody);

        for (let i = 0; i < this.row; i++) {
            let tr = document.createElement('tr');
            tr.setAttribute("class", "tdstyle");
            tbody.appendChild(tr);

            for (let j = 0; j < this.column; j++) {
                let td = document.createElement('td');
                td.setAttribute("class", "tdstyle");
                td.setAttribute("data-x", j);
                td.setAttribute("data-y", i);
                td.id = "td-" + i + j;
                td.addEventListener('click', () => {
                    if (td.dataset.playeraccess === "1") {
                        this.playerTab = move.move(td.id, this.playerTab);
                        move.availableMove(this.playerTab);
                    }
                });
                tr.appendChild(td)
            }
        }

        this.board.appendChild(table);
        this.createMovement();
        this.createNoAccess();
        this.createWeapon();
        this.playerTab[0].move = true;
    }

    getRandomCell() {
        let randomInt = 0;
        let id = null;
        let cell = null;

        for (let i = 0; i < this.gridLength; i++) {
            randomInt = Math.floor(Math.random() * this.gridLength);
            if (randomInt < 10) {
                id = 'td-0'
            } else {
                id = 'td-'
            }
            cell = document.getElementById(id + randomInt);

            while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
                randomInt = Math.floor(Math.random() * this.gridLength);
                if (randomInt < 10) {
                    id = 'td-0'
                } else {
                    id = 'td-'
                }
                cell = document.getElementById(id + randomInt);
            }
        }
        return cell;
    }

    createNoAccess() {
        let idNoAccess = null;
        let cellPlayer = [];
        let cell = document.getElementsByTagName("td");
        //Look for the players' positions and add them in a tab
        for (let j = 0; j < cell.length; j++) {
            if (cell[j].hasAttribute("data-player")) {
                cellPlayer.push(cell[j]);
            }
        }
        for (let i = 0; i < 25; i++) {
            idNoAccess = this.getRandomCell();
            //Avoid no access cells around player so that he's not blocked in a corner
            while (idNoAccess.dataset.x === cellPlayer[0].dataset.x || idNoAccess.dataset.x === cellPlayer[1].dataset.x || idNoAccess.dataset.y === cellPlayer[0].dataset.y || idNoAccess.dataset.y === cellPlayer[1].dataset.y) {
                idNoAccess = this.getRandomCell();
            }
            idNoAccess.style.backgroundColor = 'black';
            idNoAccess.setAttribute('data-access', 0);
        }
    }

    //TODO: change weapon images to png (to have grey background when accessible)
    createWeapon() {
        let cellWeapon = null;
        let weapon = new Weapon();
        //let weapon = new Weapon();
        //let Cell = new Cell('data-access', null, null);

        for (let i = 0; i < 8; i++) {
            let randomWeapon = weapon.getRandomWeapon();
            cellWeapon = this.getRandomCell();
            cellWeapon.setAttribute('data-weapon', randomWeapon);
        }
    }

    //TODO: avoid 2 players on the same X or Y
    createPlayer() {
        let playerCellTab = [];
        for (let i = 0; i < 2; i++) {
            let cellPlayer = this.getRandomCell();
            playerCellTab.push(cellPlayer);
            //Avoid 2 players next to each other when initializing the grid
            /*if (playerCellTab[1].dataset.x === playerCellTab[0].dataset.x || document.getElementById(playerCellTab[1]).y === document.getElementById(playerCellTab[0]).y) {
                cellPlayer = this.getRandomCell();
                playerCellTab.pop();
                playerCellTab.push(cellPlayer);
            }*/
                this.playerTab[i].position = cellPlayer.id;
                cellPlayer.setAttribute('data-player', this.playerTab[i].id);
        }
        console.log(playerCellTab);
        return this.playerTab;
    }


    createMovement() {
        let move = new Move;
        let newPlayer = this.createPlayer();
        move.availableMove(newPlayer);
    }

}

export { GenGrid };
