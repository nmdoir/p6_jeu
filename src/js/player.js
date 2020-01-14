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

    //TODO: factoriser les addeventlisteners

    //Générer les boutons d'attaque et de défense pour démarrer le combat, en fonction du joueur dont c'est le tour
    allowFight(playerTab) {
        let buttonsj1 = document.getElementById('buttonsj1');
        let buttonsj2 = document.getElementById('buttonsj2');
        let buttonA1 = document.createElement('button');
        let buttonD1 = document.createElement('button');
        let buttonA2 = document.createElement('button');
        let buttonD2 = document.createElement('button');
        buttonA1.innerHTML = "Attaquer";
        buttonD1.innerHTML = "Défendre";
        buttonA2.innerHTML = "Attaquer";
        buttonD2.innerHTML = "Défendre";

        //Générer les 4 boutons
        buttonsj1.appendChild(buttonA1).setAttribute('class', 'fightbtn attack btnj1');
        buttonsj1.appendChild(buttonD1).setAttribute('class', 'fightbtn defense btnj1');
        buttonsj2.appendChild(buttonA2).setAttribute('class', 'fightbtn attack btnj2'); //supp classes attack/defense?
        buttonsj2.appendChild(buttonD2).setAttribute('class', 'fightbtn defense btnj2');

        //Masquer les boutons du joueur dont ce n'est pas le tour
            if (playerTab[0].move === true) {
                buttonsj2.setAttribute('class', 'disable');
            }
            else if (playerTab[1].move === true) {
                buttonsj1.setAttribute('class', 'disable');
            }

        let weapon = new Weapon();

        buttonA1.addEventListener("click", () => {
            let attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);
            playerTab[1].life -= attackerDamage;
            document.getElementById('lifej2').innerHTML = playerTab[1].life;
            buttonsj2.classList.remove('disable');
            buttonsj1.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });

        buttonD1.addEventListener("click", () => {
            let attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);
            playerTab[1].life -= (attackerDamage / 2);
            document.getElementById('lifej2').innerHTML = playerTab[1].life;
            buttonsj2.classList.remove('disable');
            buttonsj1.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });

        buttonA2.addEventListener("click", () => {
            let attackerDamage = weapon.getWeaponDamage(playerTab[1].weapon);
            playerTab[0].life -= attackerDamage;
            document.getElementById('lifej1').innerHTML = playerTab[0].life;
            buttonsj1.classList.remove('disable');
            buttonsj2.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });

        buttonD2.addEventListener("click", () => {
            let attackerDamage = weapon.getWeaponDamage(playerTab[1].weapon);
            playerTab[0].life -= (attackerDamage / 2);
            document.getElementById('lifej1').innerHTML = playerTab[0].life;
            buttonsj1.classList.remove('disable');
            buttonsj2.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });
    }

    //TODO: améliorer la fonction, factoriser
    checkEnd(playerTab) {
        let board = document.getElementById('finish');
        let box = document.createElement('h3');
        if (playerTab[0].life < 1) {
            document.getElementById('buttonsj1').setAttribute('class', 'disable');
            document.getElementById('buttonsj2').setAttribute('class', 'disable');
            document.getElementById('lifej1').innerHTML = "0";
            board.appendChild(box).setAttribute('class', 'text-center');
            box.innerHTML = name_j2 + " a gagné !";
        }
        else if (playerTab[1].life < 1) {
            document.getElementById('buttonsj1').setAttribute('class', 'disable');
            document.getElementById('buttonsj2').setAttribute('class', 'disable');
            document.getElementById('lifej2').innerHTML = "0";
            board.appendChild(box).setAttribute('class', 'text-center');
            box.innerHTML = name_j1 + " a gagné !";
        }
    }
}

export {Player};