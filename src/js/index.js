import {GenGrid} from "../js/genGrid";

//Demander le nom des joueurs
let name_j1 = ""; //prompt("Entrez le nom du joueur 1 : ");
let name_j2 = ""; //prompt("Entrez le nom du joueur 2 : ");

//Leur donner un nom par défaut au cas où l'utilisateur n'entre rien
if (!name_j1 || name_j1 === "") {
    name_j1 = "Joueur 1";
}

if (!name_j2 || name_j2 === "") {
    name_j2 = "Joueur 2";
}

//Afficher les noms des joueurs dans les blocs info
document.getElementById('namej1').innerHTML = name_j1;
document.getElementById('namej2').innerHTML = name_j2;

//On exporte les 2 variables afin de les utiliser dans la classe Player
export { name_j1 };
export { name_j2 };


//Insérer la grille dans le HTML
/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
}
);*/

let grid = new GenGrid(10, 10);
grid.createGrid();


//cd /c/Users/User/Desktop/OPENCLASSROOMS/p6_jeu