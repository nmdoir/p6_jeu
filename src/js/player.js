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
                "countMove": 0
            },
            {
                "id": "player2",
                "name": name_j2,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
                "countMove": 0
            }
        ]
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

    getPlayerTab() {
        return this.playerTab
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