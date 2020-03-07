import {GenGrid} from "../js/genGrid";

//Demander le nom des joueurs
let nameJ1 = prompt("Entrez le nom du joueur 1 : ");
let nameJ2 = prompt("Entrez le nom du joueur 2 : ");

//Leur donner un nom par défaut au cas où l'utilisateur n'entre rien
if (!nameJ1 || nameJ1 === "") {
    nameJ1 = "Joueur 1";
}

if (!nameJ2 || nameJ2 === "") {
    nameJ2 = "Joueur 2";
}

//Afficher les noms des joueurs dans les blocs info
$("#namej1").text(nameJ1);
$("#namej2").text(nameJ2);

//Box règles du jeu
let modal = document.getElementById("rulesModal");

$("#rulesBtn").click(function() {
    modal.style.display = "block";
    });

$(window).click(function () {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//Définir la taille de la grille que l'on veut
let rowWanted = prompt("Entrez le nombre de lignes pour la grille :");
let colWanted = prompt("Entrez le nombre de lignes pour la grille :");

//Leur donner une valeur par défaut au cas où l'utilisateur n'entre rien
if (!rowWanted || rowWanted === "") {
    rowWanted = 10;
}

if (!colWanted || colWanted === "") {
    colWanted = 10;
}

//Insérer la grille dans le HTML
$(document).ready(function() {
    let grid = new GenGrid(rowWanted, colWanted);
    grid.createGrid();
}
);

//On exporte les variables noms des joueurs et taille du plateau afin de les utiliser dans les classes Player et Move
export { nameJ1, nameJ2, rowWanted, colWanted };