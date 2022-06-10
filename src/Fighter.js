const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, weapon = null, shield = null) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = weapon;
        this.shield = shield;
    }

    



    // Launch a fight

    getDamage() {

        return this.weapon ? this.strength + this.weapon.damage : this.strength;
    }

    getDefense() {
        return this.shield ? this.dexterity + this.shield.protection : this.dexterity;
    }


    fight(defender) {
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - this.getDefense(), 0);

        defender.life = Math.max(defender.life - damages, 0);
       // console.log(this.getDamage());
       // console.log(this.getDefense());
    }

    

    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;

