//Demander le nom des joueurs
//import {GenGrid} from "../js/genGrid";
//import {Weapon} from "./weapon";
//import {Cell} from "./cell";

var name_j1 = prompt("Entrez le nom du joueur 1 : ");
var name_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!name_j1 || name_j1 === "") {
    name_j1 = "Joueur 1";
}

if (!name_j2 || name_j2 === "") {
    name_j2 = "Joueur 2";
}

//Function to generate the empty grid
function createGrid() {
    let bloc = document.getElementById('board');
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.setAttribute("class", "center");
    table.appendChild(tbody);

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        tr.setAttribute("class","tdstyle");
        tbody.appendChild(tr);

        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.setAttribute("class","tdstyle");
            td.id = "td-" + i + j;
            tr.appendChild(td);
        }
    }

    bloc.appendChild(table);
}

//Generate a random cell id
function getRandomCell() {
    let randomInt = 0;
    let id = null;
    let cell = null;

    for (let i = 0; i < 100; i++) {
        randomInt = Math.floor(Math.random() * 100);
        if (randomInt < 10) {
            id = 'td-0'
        } else {
            id = 'td-'
        }
        cell = document.getElementById(id + randomInt);

        while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
            randomInt = Math.floor(Math.random() * 100);
            if (randomInt < 10) {
                id = 'td-0'
            }
            else {
                id = 'td-'
            }
            cell = document.getElementById(id + randomInt);
        }
    }
    return cell;
}

function createNoAccess() {
    let cell = null;
    for (let i = 0; i < 25; i++) {
        cell = getRandomCell();
        cell.style.backgroundColor = 'black';
        cell.setAttribute('data-access', 0);
    }
}


let weaponTab = [
    {
        "name": "bow",
        "damage": "5"
    },
    {
        "name": "knife",
        "damage": "10"
    },
    {
        "name": "sword",
        "damage": "15"
    },
    {
        "name": "pistol",
        "damage": "20"
    },
    {
        "name": "dynamite",
        "damage": "25"
    },
    {
        "name": "bomb",
        "damage": "30"
    }
];

function getRandomWeapon() {
    let randomInt = 0;

    for (let i = 0; i < weaponTab.length; i++) {
        randomInt = Math.floor(Math.random() * weaponTab.length);
    }
    return weaponTab[randomInt].name;
}

function createWeapon() {
    let cell = null;

    for (let i = 0; i < 8; i++) {
        let randomWeapon = getRandomWeapon();
        cell = getRandomCell(); //document.getElementById(id + randomInt);
        cell.setAttribute('data-weapon', randomWeapon);
    }
}

let playerTab = [
    {
        "id": "player1",
        "name": name_j1,
        "life": 100,
        "weapon": null,
        "move": null,
        "position": null
    },
    {
        "id": "player2",
        "name": name_j2,
        "life": 100,
        "weapon": null,
        "move": null,
        "position": null
    }
];

function createPlayer() {
    for (let i = 0; i < playerTab.length; i++) {
        let randomCell = getRandomCell();
        playerTab[i].position = randomCell;
        randomCell.setAttribute('data-player', playerTab[i].id);
    }
}



/*function availableMove() {
    for (let i = 0; i < playerTab.length; i++) {
        let currentCellId = document.hasAttribute('data-player').id; //ou = playerTab[i].position
        let currentCell = currentCellId[3] + currentCellId[4];
        console.log(currentCellId);
        let access = [-30, -20, -10, -3, -2, -1, 1, 2, 3, 10, 20, 30];
        let availableCells = [];
        for (let number of access) {
            availableCells.push("td-" + (number + currentCell));
        }
        for (let element of availableCells) {
            let accessibleCell = document.getElementById(element);
            if (!accessibleCell.hasAttribute('data-player') && !accessibleCell.hasAttribute('data-access')) { //Comment gérer les fins/début de ligne?
            accessibleCell.setAttribute('data-playeraccess', 1);
        }
    }
}
}*/

function availableMoveTest() {
    for (let i = 0; i < playerTab.length; i++) {
        let currentCellId = document.hasAttribute('data-player').id;
        let currentCell = currentCellId[3] + currentCellId[4];
        let access = [-30, -20, -10, -3, -2, -1, 1, 2, 3, 10, 20, 30];
        let availableCells = [];
        for (let number of access) {
            availableCells.push("td-" + (number + currentCell));
        }
        for (let element of availableCells) {
            let accessibleCell = document.getElementById(element);
            if (!accessibleCell.hasAttribute('data-player') && !accessibleCell.hasAttribute('data-access')) { //Comment gérer les fins/début de ligne?
                accessibleCell.setAttribute('data-playeraccess', 1);
            }
        }
    }
}

function availableMove2() {
    let currentCellX = document.hasAttribute('data-player').x;
    let currentCellY = document.hasAttribute('data-player').y;
    let availableY = 0;
    let availableX = 0;
    let nextCell = document.dataset.availableX && document.dataset.availableY;
    for (availableY; availableY < 10 ; availableY++) {
        for (availableX; availableX < 10; availableX++) {
            if ((Number(currentCellY.dataset.y) === availableY && Number(currentCellX.dataset.x) === (availableX-3 || availableX-2 || availableX-1 || availableX+1 || availableX+2 || availableX+3)) || (Number(currentCellX.dataset.x) === availableX && Number(currentCellY.dataset.y) === (availableY-3 || availableY-2 || availableY-1 || availableY+1 || availableY+2 || availableY+3))) {
                nextCell.setAttribute('data-playeraccess', 1);
            }
        }
    }
}

function scanTab {
    let scanCell = document.getElementsByClassName("tdstyle");
    for (let i = 0; i < 10 ; i++) {
        for (let j = 0; j < 10; j++) {
            if (Number(scanCell.dataset.y) === i && Number(scanCell.dataset.x) === j) {
                //action
            }
        }
    }
}




//Insérer la grille dans le HTML
$(document).ready(function() {
    createGrid();
    createNoAccess();
    createWeapon();
    createPlayer();
    availableMove();
});

/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
});*/