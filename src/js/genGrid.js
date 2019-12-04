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
        this.playerTab = player.getPlayerTab()
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
                        this.playerTab = move.move(td.id, this.playerTab)
                    }
                );
                tr.appendChild(td)
            }
        }

        this.board.appendChild(table);
        this.createMovement();
        this.createNoAccess();
        this.createWeapon();
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
        for (let j = 0; j < cell.length; j++) {
            if (cell[j].hasAttribute("data-player")) {
                cellPlayer.push(cell[j]);
            }
        }
        for (let i = 0; i < 25; i++) {
            idNoAccess = this.getRandomCell();
            while (idNoAccess.dataset.x === cellPlayer[0].dataset.x || idNoAccess.dataset.x === cellPlayer[1].dataset.x || idNoAccess.dataset.y === cellPlayer[0].dataset.y || idNoAccess.dataset.y === cellPlayer[1].dataset.y) {
                idNoAccess = this.getRandomCell();
            }
            idNoAccess.style.backgroundColor = 'black';
            idNoAccess.setAttribute('data-access', 0);
        }
    }

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
        let player = new Player;
        let playerTab = player.getPlayerTab();
        for (let i = 0; i < 2; i++) {
            let cellPlayer = this.getRandomCell();
            //if ((!document.getElementById(cellPlayer).y === document.querySelector("td.[data-player=player1]").y) && (!document.getElementById(cellPlayer).x === document.querySelector("td.[data-player=player1]").x)) {
                playerTab[i].position = cellPlayer.id;
                cellPlayer.setAttribute('data-player', playerTab[i].id);
        }
        return playerTab;
    }

    createMovement() {
        let move = new Move;
        move.availableMove(this.createPlayer());
    }
}

export { GenGrid };