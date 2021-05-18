class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
        this.totalmagicsused = 0;
        this.counter = 0;
    }

    learnAttackSkill(newskill) {
        this.skills.push(newskill);
    }

    showStatus() {
        for (let i = 0; i < this.skills.length; i++) {
            this.totalmagicsused += this.skills[i].magic;
        }

        /* this.magic=this.magic-this.totalmagicsused; */
        console.log(`${this.name} has ${this.health} lives and ${this.magic - this.totalmagicsused} magics left`);

        if (this.counter > 3) {
            console.log(`${this.name} won`);
        } else {
            console.log(`${this.name} lost`);
        }
    }

    getMagics() {
        let random=Math.floor(Math.random()*20);
        this.magic=this.magic+random;
    }
    
    attack(index, opponent) {

        /* random=Math.floor(Math.random()*this.skills.length); */
        if ((this.magic > this.skills[index].magic) && (opponent.health > 0)) {
            this.magic = this.magic - this.skills[index].magic;

            /* console.log(this.skills[index]); */
            console.log(`${this.name} launched skill "${this.skills[index].attack}" successfully`);
            console.log(`${opponent.name} got ${this.skills[index].damage} damage`);

            opponent.health = opponent.health - this.skills[index].damage;
            console.log(opponent.health);

            if (opponent.health <= 0) {
                console.log(`${opponent.name} is killed!`);
            }
            console.log(this.magic);
            this.counter++;

        } else if (opponent.health <= 0) {
            console.log(`${opponent.name} is already dead!`);
        } else {
            console.log(`${this.name} not enough magic and cannot launch attack!`);
        }
    }
}

class AttackSkill {
    constructor(attack, damage, magic) {
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    }
};

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

/* let fire = new AttackSkill("fire", 40, 100); */

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

/* pikachu.learnAttackSkill(fire); */

console.log(pikachu);

bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);

/* bulbasaur.learnAttackSkill(fire); */

pikachu.attack(0, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.attack(1, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(1, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.attack(1, bulbasaur);