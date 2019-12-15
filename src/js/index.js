import {GenGrid} from "../js/genGrid";

//Demander le nom des joueurs
let name_j1 = prompt("Entrez le nom du joueur 1 : ");
let name_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!name_j1 || name_j1 === "") {
    name_j1 = "Joueur 1";
}

if (!name_j2 || name_j2 === "") {
    name_j2 = "Joueur 2";
}

//Display player info
document.getElementById('namej1').innerHTML = name_j1;
document.getElementById('namej2').innerHTML = name_j2;




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