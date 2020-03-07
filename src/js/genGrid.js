import {Weapon} from "../js/weapon";
import {Player} from "../js/player";
import {Move} from "../js/move";

class GenGrid {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.board = $("#board");
        this.gridLength = this.row * this.column;
    }

    createGrid() {
        //On crée la grille vierge
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let move = new Move();
        let player = new Player;
        this.playerTab = player.getPlayerTab();
        this.playerTab[0].move = true;
        $(table).attr("class", "center");
        $(tbody).appendTo(table);

        let id = 0;
        for (let i = 0; i < this.row; i++) {
            let tr = document.createElement("tr");
            $(tr).attr("class", "tdstyle").appendTo(tbody);

            //On ajoute les coordonnées x/y à chaque case pour pouvoir les identifier ensuite dans nos fonctions de mouvement
            for (let j = 0; j < this.column; j++) {
                let increment = id++;
                let td = document.createElement("td");
                $(td).attr("class", "tdstyle").attr("data-x", j).attr("data-y", i);
                td.id = this.getTd(increment) + increment;
                //td.id = "td-" + i + j;

                //On écoute les événements de clics sur les cases pour les mouvements
                td.addEventListener("click", () => {
                    if (td.dataset.playeraccess === "1") {
                        this.playerTab = move.move(td.id, this.playerTab);
                        move.availableMove(this.playerTab);
                        this.getPlayerInfo(this.playerTab);
                    }
                });

                $(td).appendTo(tr);
            }
        }

        $(table).appendTo(this.board);

        this.displayInfo();
        //On affiche les cases cliquables pour le 1er joueur et on dispose aléatoirement les cases non accessibles et les armes
        this.createMovement();
        this.createNoAccess();
        this.createWeapon();
        //On désigne le 1er joueur pour commencer le 1er tour
        this.playerTab[0].move = true;
        //Afficher les infos des joueurs dans les 2 blocs
        this.getPlayerInfo(this.playerTab);
    }

    //Obtenir une case aléatoire sur le plateau
    getRandomCell() {
        let randomInt = 0;
        let td = null;
        let cell = null;

        for (let i = 0; i < this.gridLength; i++) {
            randomInt = Math.floor(Math.random() * this.gridLength);
            td = this.getTd(randomInt);
            cell = document.getElementById(td + randomInt);

            //Si elle est déjà prise, on continue à générer de nouvelles cases
            while ($(cell).attr("data-access") || $(cell).attr("data-weapon") || $(cell).attr("data-player")) {
                randomInt = Math.floor(Math.random() * this.gridLength);
                td = this.getTd(randomInt);
                cell = document.getElementById(td + randomInt);
            }
        }
        return cell;
    }

    //On adapte le format de l'id pour qu'il n'y ait pas d'erreurs : "td-xx"
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
        //On cherche les positions des joueurs et on les entre dans un tableau
        for (let j = 0; j < cell.length; j++) {
            if (cell[j].hasAttribute("data-player")) {
                cellPlayer.push(cell[j]);
            }
        }
        //On génère 25 cases non accessibles
        for (let i = 0; i < 25; i++) {
            idNoAccess = this.getRandomCell();
            //Pour éviter qu'un joueur ne se retrouve bloqué dans un coin, on interdit les cases non accessibles sur les axes x et y des 2 joueurs
            while (idNoAccess.dataset.x === cellPlayer[0].dataset.x || idNoAccess.dataset.x === cellPlayer[1].dataset.x || idNoAccess.dataset.y === cellPlayer[0].dataset.y || idNoAccess.dataset.y === cellPlayer[1].dataset.y) {
                idNoAccess = this.getRandomCell();
            }
            $(idNoAccess).css("background", "black");
            $(idNoAccess).attr("data-access", 0);
        }
    }

    createWeapon() {
        let cellWeapon = null;
        let weapon = new Weapon();

        for (let i = 0; i < 8; i++) {
            let randomWeapon = weapon.getRandomWeapon();
            cellWeapon = this.getRandomCell();
            $(cellWeapon).attr("data-weapon", randomWeapon);
        }
    }

    createPlayer() {
        let cellPlayer0 = this.getRandomCell();
        this.playerTab[0].position = cellPlayer0.id;
        $(cellPlayer0).attr("data-player", this.playerTab[0].id);

        let cellPlayer1 = this.getRandomCell();

        //Eviter que les 2 joueurs se retrouvent à côté à l'initialisation du plateau
        while (cellPlayer0.dataset.x === cellPlayer1.dataset.x || cellPlayer0.dataset.y === cellPlayer1.dataset.y) {
                cellPlayer1 = this.getRandomCell();
        }
        this.playerTab[1].position = cellPlayer1.id;
        $(cellPlayer1).attr("data-player", this.playerTab[1].id);

        return this.playerTab;
    }

    createMovement() {
        let move = new Move;
        let newPlayer = this.createPlayer();
        move.availableMove(newPlayer);
    }

    //Afficher les infos des joueurs dans les 2 blocs
    getPlayerInfo(playerTab) {
        let weapon = new Weapon;
        //Life
        $("#lifej1").text(playerTab[0].life);
        $("#lifej2").text(playerTab[1].life);

        //Weapon
        $("#weaponj1").text(weapon.getFrenchWeaponName(playerTab[0].weapon));
        $("#weaponj2").text(weapon.getFrenchWeaponName(playerTab[1].weapon));

        //Damage
        $("#damagej1").text(weapon.getWeaponDamage(playerTab[0].weapon));
        $("#damagej2").text(weapon.getWeaponDamage(playerTab[1].weapon));
    }

    //Afin que les blocs ne s'affichent pas en même temps que les prompts au moment du chargement de la page
    displayInfo() {
        $("h2:first").removeClass("disable");
        $("#rulesBtn").removeClass("disable");
        $("#playerinfo").removeClass("disable");
    }

}

export { GenGrid };
