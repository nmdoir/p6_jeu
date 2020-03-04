class Weapon {
    constructor() {
        this.weaponTab = [
            {
                "name": "knife",
                "damage": "10"
            },
            {
                "name": "sword",
                "damage": "20"
            },
            {
                "name": "pistol",
                "damage": "30"
            },
            {
                "name": "dynamite",
                "damage": "40"
            }
        ];
    }

    //Choisir aléatoirement des armes pour les placer ensuite sur le plateau
    getRandomWeapon() {
        let randomInt = 0;

        for (let i = 0; i < this.weaponTab.length; i++) {
            randomInt = Math.floor(Math.random() * this.weaponTab.length);
        }
        return this.weaponTab[randomInt].name;
    }

    //Récupérer le dégât d'une arme
    getWeaponDamage(weapon) {
        for (let i = 0; i < this.weaponTab.length; i++) {
            if (this.weaponTab[i].name === weapon) {
                return this.weaponTab[i].damage;
            }
        }
    }

    //Récupérer la traduction de l'arme pour l'afficher dans les blocs d'infos des joueurs
    getFrenchWeaponName(weapon) {
        let translationTab = {
            "knife": "Couteau",
            "sword": "Epée",
            "pistol": "Revolver",
            "dynamite": "Dynamite"
        };
        return translationTab[weapon];


    }

}

export { Weapon };