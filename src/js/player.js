//On récupère les variables des noms des joueurs entrés par l'utilisateur
import { name_j1 } from "./index";
import { name_j2 } from "./index";
import {Weapon} from "./weapon";

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

    //TODO: fonction à améliorer, répétitions

    //Afficher les boutons d'attaque et de défense en fonction du joueur dont c'est le tour
    allowFight(playerTab) {
        let weapon = new Weapon();
        let buttonsj1 = document.getElementById('buttonsj1');
        let buttonsj2 = document.getElementById('buttonsj2');
        let buttonA = document.createElement('button');
        let buttonD = document.createElement('button');
        buttonA.innerHTML = "Attaquer";
        buttonD.innerHTML = "Défendre";

        if(playerTab[0].move === true && playerTab[0].life > 0 && playerTab[1].life > 0){
            let attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);
            buttonsj1.classList.remove('disable');
            buttonsj2.setAttribute('class', 'disable');
            buttonsj1.appendChild(buttonA).setAttribute('class', 'fightbtn attack'); //supp classes attack/defense?
            buttonsj1.appendChild(buttonD).setAttribute('class', 'fightbtn defense');
            buttonA.addEventListener("click", () => {
                console.log('attaque cliquée');
                playerTab[1].life -= attackerDamage;
                document.getElementById('lifej1').innerHTML = playerTab[1].life;
                buttonsj1.setAttribute('class', 'disable');
                this.allowMove(playerTab);
                this.allowFight(playerTab);
            });
            buttonD.addEventListener("click", () => {
                console.log('defense cliquée');
                playerTab[1].life -= (attackerDamage / 2);
                document.getElementById('lifej1').innerHTML = playerTab[1].life;
                buttonsj1.setAttribute('class', 'disable');
                this.allowMove(playerTab);
                this.allowFight(playerTab);
            });
        }
        else if (playerTab[1].move === true && playerTab[0].life > 0 && playerTab[1].life > 0) {
            let attackerDamage = weapon.getWeaponDamage(playerTab[1].weapon);
            buttonsj2.classList.remove('disable');
            buttonsj1.setAttribute('class', 'disable');
            buttonsj2.appendChild(buttonA).setAttribute('class', 'fightbtn attack');
            buttonsj2.appendChild(buttonD).setAttribute('class', 'fightbtn defense');
            buttonA.addEventListener("click", () => {
                console.log('attaque cliquée');
                playerTab[0].life -= attackerDamage;
                document.getElementById('lifej1').innerHTML = playerTab[0].life;
                buttonsj2.setAttribute('class', 'disable');
                this.allowMove(playerTab);
                this.allowFight(playerTab);
            });
            buttonD.addEventListener("click", () => {
                console.log('defense cliquée');
                playerTab[0].life -= (attackerDamage / 2);
                document.getElementById('lifej1').innerHTML = playerTab[0].life;
                buttonsj2.setAttribute('class', 'disable');
                this.allowMove(playerTab);
                this.allowFight(playerTab);
            });
        }
        else if (playerTab[0].life === 0 || playerTab[1].life === 0) {
            prompt("fin du jeu");
        }
        return playerTab;
    }

    /*increaseLife(points) {
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