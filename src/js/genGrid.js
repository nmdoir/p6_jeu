import {Weapon} from "../js/weapon";
import {Player} from "../js/player";
import {Move} from "../js/move";

class GenGrid {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.board = document.getElementById("board");
        this.gridLength = this.row * this.column;
    }

    createGrid() {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let move = new Move();
        let player = new Player;
        this.playerTab = player.getPlayerTab();
        this.playerTab[0].move = true;
        table.setAttribute("class", "center");
        table.appendChild(tbody);

        for (let i = 0; i < this.row; i++) {
            let tr = document.createElement("tr");
            tr.setAttribute("class", "tdstyle");
            tbody.appendChild(tr);

            for (let j = 0; j < this.column; j++) {
                let td = document.createElement("td");
                td.setAttribute("class", "tdstyle");
                td.setAttribute("data-x", j);
                td.setAttribute("data-y", i);
                td.id = "td-" + i + j;
                td.addEventListener("click", () => {
                    if (td.dataset.playeraccess === "1") {
                        this.playerTab = move.move(td.id, this.playerTab);
                        move.availableMove(this.playerTab);
                        this.getPlayerInfo(this.playerTab);
                    }
                });
                tr.appendChild(td);
            }
        }

        this.displayPlayerInfo();
        this.board.appendChild(table);
        this.createMovement();
        this.createNoAccess();
        this.createWeapon();
        this.playerTab[0].move = true;
        this.getPlayerInfo(this.playerTab);
    }

    getRandomCell() {
        let randomInt = 0;
        let td = null;
        let cell = null;

        for (let i = 0; i < this.gridLength; i++) {
            randomInt = Math.floor(Math.random() * this.gridLength);
            td = this.getTd(randomInt);
            cell = document.getElementById(td + randomInt);

            while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
                randomInt = Math.floor(Math.random() * this.gridLength);
                td = this.getTd(randomInt);
                cell = document.getElementById(td + randomInt);
            }
        }
        return cell;
    }

    getTd(randomInt) {
        let id;
        if (randomInt < 10) {
            id = "td-0";
        } else {
            id = "td-";
        }
        return id;
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
            idNoAccess.style.backgroundColor = "black";
            idNoAccess.setAttribute("data-access", 0);
        }
    }

    createWeapon() {
        let cellWeapon = null;
        let weapon = new Weapon();

        for (let i = 0; i < 8; i++) {
            let randomWeapon = weapon.getRandomWeapon();
            cellWeapon = this.getRandomCell();
            cellWeapon.setAttribute("data-weapon", randomWeapon);
        }
    }

    createPlayer() {
        let cellPlayer0 = this.getRandomCell();
        this.playerTab[0].position = cellPlayer0.id;
        cellPlayer0.setAttribute("data-player", this.playerTab[0].id);

        let cellPlayer1 = this.getRandomCell();

        //Avoid 2 players next to each other when initializing the grid
        while (Number(cellPlayer1.id.slice(3)) > Number((cellPlayer0.id.slice(3) - 12)) && Number(cellPlayer1.id.slice(3)) < Number((cellPlayer0.id.slice(3) + 12))) {
            cellPlayer1 = this.getRandomCell();
        }
        this.playerTab[1].position = cellPlayer1.id;
        cellPlayer1.setAttribute("data-player", this.playerTab[1].id);

        return this.playerTab;
    }

    createMovement() {
        let move = new Move;
        let newPlayer = this.createPlayer();
        move.availableMove(newPlayer);
    }

    getPlayerInfo(playerTab) {
        let weapon = new Weapon;
        //Life
        document.getElementById("lifej1").innerHTML = playerTab[0].life;
        document.getElementById("lifej2").innerHTML = playerTab[1].life;
        //Weapon
        document.getElementById("weaponj1").innerHTML = weapon.getFrenchWeaponName(playerTab[0].weapon);
        document.getElementById("weaponj2").innerHTML = weapon.getFrenchWeaponName(playerTab[1].weapon);
        //Damage
        document.getElementById("damagej1").innerHTML = weapon.getWeaponDamage(playerTab[0].weapon);
        document.getElementById("damagej2").innerHTML = weapon.getWeaponDamage(playerTab[1].weapon);
    }

    //Afin que les blocs ne s'affichent pas en même temps que les prompts au moment du chargement de la page
    displayPlayerInfo() {
        let div = document.getElementById("playerinfo");
        div.classList.remove("disable");
    }

}

export { GenGrid };
