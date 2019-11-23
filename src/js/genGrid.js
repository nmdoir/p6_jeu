import {Weapon} from "../js/weapon";
import {Player} from "../js/player";

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
        table.setAttribute("class", "center");
        table.appendChild(tbody);

        for (let i = 0; i < this.row; i++) {
            let tr = document.createElement('tr');
            tr.setAttribute("class", "tdstyle");
            tbody.appendChild(tr);

            for (let j = 0; j < this.column; j++) {
                let td = document.createElement('td');
                td.setAttribute("class", "tdstyle");
                td.setAttribute("data-x", i);
                td.setAttribute("data-y", j);
                td.id = "td-" + i + j;
                tr.appendChild(td)
            }
        }

        this.board.appendChild(table);
        this.createNoAccess();
        this.createWeapon();
        this.createPlayer();
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
        let cellAccess = null;
        for (let i = 0; i < 25; i++) {
            cellAccess = this.getRandomCell();
            cellAccess.style.backgroundColor = 'black';
            cellAccess.setAttribute('data-access', 0);
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

    createPlayer() {
        let player = new Player;
        this.playerTab = player.getPlayerTab();
        for (let i = 0; i < 2; i++) {
            let cellPlayer = this.getRandomCell();
            this.playerTab[i].position = cellPlayer;
            cellPlayer.setAttribute('data-player', this.playerTab[i].id);
        }
    }
}

export { GenGrid };




/* class Grid {
    constructor(cellId, access, player, weapon, gridLength) {
        this.cellId = attributeFirst ? attributeFirst : null;
        this.access = attributeSecond ? attributeSecond : null;
        this.player = attributeThird ? attributeThird : null;
        this.gridLength = gridLength
    }

 */

