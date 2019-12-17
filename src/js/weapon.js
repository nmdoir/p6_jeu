class Weapon {
    constructor() {
        this.weaponTab = [
            {
                "name": "knife",
                "damage": "10"
            },
            {
                "name": "sword",
                "damage": "15"
            },
            {
                "name": "pistol",
                "damage": "20"
            },
            {
                "name": "dynamite",
                "damage": "25"
            },
            {
                "name": "bomb",
                "damage": "30"
            }
        ];
    }

    getRandomWeapon() {
        let randomInt = 0;

        for (let i = 0; i < this.weaponTab.length; i++) {
            randomInt = Math.floor(Math.random() * this.weaponTab.length);
        }
        return this.weaponTab[randomInt].name;
    }

    getWeaponDamage(weapon) {
        for (let i = 0; i < this.weaponTab.length; i++) {
            if (this.weaponTab[i].name === weapon) {
                return this.weaponTab[i].damage;
            }
        }
    }

    getFrenchWeaponName(weapon) {
        let translationTab = {
            'knife': 'Couteau',
            'sword': 'Epée',
            'pistol': 'Revolver',
            'dynamite': 'Dynamite',
            'bomb': 'Boule de feu'
        };
        return translationTab[weapon];


    }

}

export { Weapon };