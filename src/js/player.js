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
        buttonsj1.setAttribute('data-damage', 0);
        let buttonsj2 = document.getElementById('buttonsj2');
        buttonsj2.setAttribute('data-damage', 0);
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
        buttonsj2.appendChild(buttonA2).setAttribute('class', 'fightbtn attack btnj2');
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
            if (buttonsj1.dataset.damage > 0) {
                let attackerDamage = Number(buttonsj1.dataset.damage);
                playerTab[1].life -= attackerDamage;
                document.getElementById('lifej2').innerHTML = playerTab[1].life;
                buttonsj1.setAttribute('data-damage', 0);
            }
            else {
                let attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);
                playerTab[1].life -= attackerDamage;
                document.getElementById('lifej2').innerHTML = playerTab[1].life;
            }
            buttonsj2.classList.remove('disable');
            buttonsj1.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });

        buttonD1.addEventListener("click", () => {
            let attackerDamage = Number(weapon.getWeaponDamage(playerTab[1].weapon) / 2);
            buttonsj2.setAttribute('data-damage', String(attackerDamage));
            buttonsj2.classList.remove('disable');
            buttonsj1.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });

        buttonA2.addEventListener("click", () => {
            if (buttonsj2.dataset.damage > 0) {
                let attackerDamage = Number(buttonsj2.dataset.damage);
                playerTab[0].life -= attackerDamage;
                document.getElementById('lifej1').innerHTML = playerTab[0].life;
                buttonsj2.setAttribute('data-damage', 0);
            }
            else {
                let attackerDamage = weapon.getWeaponDamage(playerTab[1].weapon);
                playerTab[0].life -= attackerDamage;
                document.getElementById('lifej1').innerHTML = playerTab[0].life;
            }
            buttonsj1.classList.remove('disable');
            buttonsj2.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });

        buttonD2.addEventListener("click", () => {
            let attackerDamage = Number(weapon.getWeaponDamage(playerTab[0].weapon) / 2);
            buttonsj1.setAttribute('data-damage', String(attackerDamage));
            buttonsj1.classList.remove('disable');
            buttonsj2.setAttribute('class', 'disable');
            this.allowMove(playerTab);
            this.checkEnd(playerTab);
        });
    }

    //TODO: améliorer la fonction, factoriser
    checkEnd(playerTab) {
        let box = document.getElementById('finish');
        let div = document.createElement('div');
        let text = document.createElement('h2');
        let btnPlayAgain = document.createElement('button');
        if (playerTab[0].life < 1) {
            document.getElementById('buttonsj1').setAttribute('class', 'disable');
            document.getElementById('buttonsj2').setAttribute('class', 'disable');
            document.getElementById('lifej1').innerHTML = "0";
            box.style.display = "block";
            box.appendChild(div).setAttribute('class','modal-content');
            div.appendChild(text).innerHTML = name_j2 + " a gagné !";
            div.appendChild(btnPlayAgain).setAttribute('id', 'playAgain');
            btnPlayAgain.innerHTML = "Rejouer";
            btnPlayAgain.addEventListener("click", () => {
                location.reload();
            });
        }
        else if (playerTab[1].life < 1) {
            document.getElementById('buttonsj1').setAttribute('class', 'disable');
            document.getElementById('buttonsj2').setAttribute('class', 'disable');
            document.getElementById('lifej2').innerHTML = "0";
            box.style.display = "block";
            box.appendChild(div).setAttribute('class','modal-content');
            div.appendChild(text).innerHTML = name_j1 + " a gagné !";
            div.appendChild(btnPlayAgain).setAttribute('id', 'playAgain');
            btnPlayAgain.innerHTML = "Rejouer";
            btnPlayAgain.addEventListener("click", () => {
                location.reload();
            });
        }
    }
}

export {Player};