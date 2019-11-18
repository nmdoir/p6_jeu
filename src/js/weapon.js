class Weapon {
    constructor() {
        this.weaponTab = [
            {
                "name": "bow",
                "damage": "5"
            },
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

    /*getWeaponTab() {
      return this.weaponTab
  }*/


    getWeaponDamage() {
        return this.weaponTab[name].damage;
    }
}

export { Weapon };