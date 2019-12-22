//On récupère les variables des noms des joueurs entrés par l'utilisateur
import { name_j1 } from "./index";
import { name_j2 } from "./index";

class Player {
    constructor() {
        this.name = null;
        this.life = 100;
        this.weapon = "knife";
        this.position = null;
        this.move = false;
        this.playerTab = [
            {
                "id": "player1",
                "name": name_j1,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
            },
            {
                "id": "player2",
                "name": name_j2,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
            }
        ]
    }

    getPlayerTab() {
        return this.playerTab
    }

    allowMove(playerTab) {
        if(playerTab[0].move === true){
            playerTab[0].move = false;
            playerTab[1].move = true;
        }
        else if (playerTab[1].move === true) {
            playerTab[1].move = false;
            playerTab[0].move = true;
        }
        return playerTab;
    }

    //Afficher les boutons d'attaque et de défense en fonction du joueur dont c'est le tour
    allowFight(playerTab) {
        let buttonsj1 = document.getElementById('buttonsj1');
        let buttonsj2 = document.getElementById('buttonsj2');
        let buttonA = document.createElement('button');
        let buttonD = document.createElement('button');
        buttonA.innerHTML = "Attaquer";
        buttonD.innerHTML = "Défendre";

        if(playerTab[0].move === true){
            buttonsj1.classList.remove('disable');
            buttonsj1.appendChild(buttonA).setAttribute('class', 'fightbtn attack');
            buttonsj1.appendChild(buttonD).setAttribute('class', 'fightbtn defense');
            buttonsj2.setAttribute('class', 'disable');
        }
        else if (playerTab[1].move === true) {
            buttonsj2.classList.remove('disable');
            buttonsj2.appendChild(buttonA).setAttribute('class', 'fightbtn attack');
            buttonsj2.appendChild(buttonD).setAttribute('class', 'fightbtn defense');
            buttonsj1.setAttribute('class', 'disable');
        }
        return playerTab;
    }

    /*getFightMoves() {
        let decision = null;
        if (document.getElementById('buttonsj1').addEventListener("click", () => {

        }))
    }


    increaseLife(points) {
        this.life += points;
        return this.life
    }

    decreaseLife(damage) {
        this.life -= damage;
        return this.life
    }
 */

}

export {Player};