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
                td.addEventListener('click', Move.movement());
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
            //if ((!document.getElementById(cellPlayer).y === document.querySelector("td.[data-player=player1]").y) && (!document.getElementById(cellPlayer).x === document.querySelector("td.[data-player=player1]").x)) {
                this.playerTab[i].position = cellPlayer;
                cellPlayer.setAttribute('data-player', this.playerTab[i].id);
        }
        let move = new Move;
        move.availableMove();
    }
}

export { GenGrid };