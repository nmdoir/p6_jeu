//On récupère les variables des noms des joueurs entrés par l'utilisateur
import { nameJ1 } from "./index";
import { nameJ2 } from "./index";
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
                "name": nameJ1,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
            },
            {
                "id": "player2",
                "name": nameJ2,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
            }
        ];
    }

    getPlayerTab() {
        return this.playerTab;
    }

    allowMove(playerTab) {
        if(playerTab[0].move === true) {
            playerTab[0].move = false;
            playerTab[1].move = true;
        }
        else if (playerTab[1].move === true) {
            playerTab[1].move = false;
            playerTab[0].move = true;
        }
        return playerTab;
    }

    //Générer les boutons d'attaque et de défense pour démarrer le combat, en fonction du joueur dont c'est le tour
    allowFight(playerTab) {
        let buttonsj1 = document.getElementById("buttonsj1");
        buttonsj1.setAttribute("data-damage", 0);
        let buttonsj2 = document.getElementById("buttonsj2");
        buttonsj2.setAttribute("data-damage", 0);

        //Créer les 4 boutons
        let buttonAttackJ1 = document.createElement("button");
        let buttonDefenseJ1 = document.createElement("button");
        let buttonAttackJ2 = document.createElement("button");
        let buttonDefenseJ2 = document.createElement("button");
        buttonAttackJ1.innerHTML = "Attaquer";
        buttonDefenseJ1.innerHTML = "Défendre";
        buttonAttackJ2.innerHTML = "Attaquer";
        buttonDefenseJ2.innerHTML = "Défendre";

        //Insérer les 4 boutons
        buttonsj1.appendChild(buttonAttackJ1).setAttribute("class", "fightbtn attack btnj1");
        buttonsj1.appendChild(buttonDefenseJ1).setAttribute("class", "fightbtn defense btnj1");
        buttonsj2.appendChild(buttonAttackJ2).setAttribute("class", "fightbtn attack btnj2");
        buttonsj2.appendChild(buttonDefenseJ2).setAttribute("class", "fightbtn defense btnj2");

        //Masquer les boutons du joueur dont ce n'est pas le tour
        if (playerTab[0].move === true) {
            buttonsj2.setAttribute("class", "disable");
        }
        else if (playerTab[1].move === true) {
            buttonsj1.setAttribute("class", "disable");
        }

        let weapon = new Weapon();

        let buttonsAttack = document.getElementsByClassName("attack");
        let buttonsDefense = document.getElementsByClassName("defense");

        //Ecouter les événements de clic du bouton Attaquer
        for (let i = 0; i < buttonsAttack.length; i++) {
            buttonsAttack[i].addEventListener("click", () => {
                let attackerDamage;

                //Vérifier de quel joueur il s'agit
                if (buttonsAttack[i].classList.contains("btnj1")) {

                    //Vérifier s'il y a eu une défense de la part de l'autre joueur, pour retrancher le bon nombre de PV
                    if (buttonsj1.dataset.damage > 0) {
                        attackerDamage = Number(buttonsj1.dataset.damage);
                    } else {
                        attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);
                    }

                    //Retrancher les points de dégâts et afficher les PV restants
                    playerTab[1].life -= attackerDamage;
                    document.getElementById("lifej2").innerHTML = playerTab[1].life;

                    //Réinitialiser le dataset des points de dégâts en cas de défense
                    buttonsj1.setAttribute("data-damage", 0);

                    //Masquer les boutons du joueur dont ce n'est pas le tour
                    buttonsj2.classList.remove("disable");
                    buttonsj1.setAttribute("class", "disable");
                }

                else if (buttonsAttack[i].classList.contains("btnj2")) {
                    if (buttonsj2.dataset.damage > 0) {
                        attackerDamage = Number(buttonsj2.dataset.damage);
                    } else {
                        attackerDamage = weapon.getWeaponDamage(playerTab[1].weapon);
                    }
                    playerTab[0].life -= attackerDamage;
                    document.getElementById("lifej1").innerHTML = playerTab[0].life;
                    buttonsj2.setAttribute("data-damage", 0);
                    buttonsj1.classList.remove("disable");
                    buttonsj2.setAttribute("class", "disable");
                }

                this.allowMove(playerTab);
                this.checkEnd(playerTab);
            });
        }

        for (let j = 0; j < buttonsDefense.length; j++) {
            buttonsDefense[j].addEventListener("click", () => {
                if (buttonsDefense[j].classList.contains("btnj1")) {
                    let attackerDamage = Number(weapon.getWeaponDamage(playerTab[1].weapon) / 2);
                    buttonsj2.setAttribute("data-damage", String(attackerDamage));
                    buttonsj2.classList.remove("disable");
                    buttonsj1.setAttribute("class", "disable");
                }
                else if (buttonsDefense[j].classList.contains("btnj2")) {
                    let attackerDamage = Number(weapon.getWeaponDamage(playerTab[0].weapon) / 2);
                    buttonsj1.setAttribute("data-damage", String(attackerDamage));
                    buttonsj1.classList.remove("disable");
                    buttonsj2.setAttribute("class", "disable");
                }
                this.allowMove(playerTab);
                this.checkEnd(playerTab);
            });
        }
    }

    checkEnd(playerTab) {
        let box = document.getElementById("finish");
        let div = document.createElement("div");
        let text = document.createElement("h2");
        let btnPlayAgain = document.createElement("button");

        for (let loser = 0; loser < playerTab.length; loser++) {
            if (playerTab[loser].life < 1) {
                let playerName = null;
                if (loser === 0) {
                    playerName = nameJ1;
                }
                else {
                    playerName = nameJ2;
                }
                document.getElementById("buttonsj1").setAttribute("class", "disable");
                document.getElementById("buttonsj2").setAttribute("class", "disable");
                playerTab[loser].life = 0;
                document.getElementById("lifej1").innerHTML = playerTab[0].life;
                document.getElementById("lifej2").innerHTML = playerTab[1].life;
                box.style.display = "block";
                box.appendChild(div).setAttribute("class","modal-content");
                div.appendChild(text).innerHTML = playerName + " a gagné !";
                div.appendChild(btnPlayAgain).setAttribute("id", "playAgain");
                btnPlayAgain.innerHTML = "Rejouer";
                btnPlayAgain.addEventListener("click", () => {
                    location.reload();
                });
            }
        }
    }
}

export {Player};