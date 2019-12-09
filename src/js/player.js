import { name_j1 } from "./index";
import { name_j2 } from "./index";

class Player {
    constructor() {
        this.name = null;
        this.life = 100;
        this.weapon = null;
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
        console.log(playerTab[0]);
        console.log(playerTab[1]);

        return playerTab;
    }

    getName() {
        return this.name
    }

    getLife() {
        return this.life
    }

    getWeapon() {
        return this.weapon
    }

    getMove() {
        return this.move
    }

    getPosition() {
        return this.position
    }


    increaseLife(points) {
        this.life += points;
        return this.life
    }

    decreaseLife(damage) {
        this.life -= damage;
        return this.life
    }
}

export {Player};