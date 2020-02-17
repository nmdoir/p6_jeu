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
document.getElementById("namej1").innerHTML = nameJ1;
document.getElementById("namej2").innerHTML = nameJ2;

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

//Insérer la grille dans le HTML
$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
}
);

//On exporte les 2 variables noms des joueurs afin de les utiliser dans la classe Player
export { nameJ1, nameJ2 };