class Pokemon {
  constructor(name, hp, ap, attacks) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.attacks = [];
  }

  learnAttack(...attackObj) {
    this.attacks.push(...attackObj);
  }

  showStatus() {
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(`${this.name} was K.O.ed`);
    } else {
      console.log(`${this.name} has ${this.hp} hp and ${this.ap} ap.`);
    }
  }

  apPlus() {
      this.ap = this.ap + 10;
      console.log(`${this.name}'s AP were restored. (Total: ${this.ap})`);
  }

  use(attack, target) {
    for (let i = 0; i < this.attacks.length; i++) {
      if (attack == this.attacks[i].attackname) {
        this.ap = this.ap - this.attacks[i].apcost;
        if (this.ap >= 0) {
          target.hp = target.hp - this.attacks[i].damage;
          console.log(`${this.name} used ${this.attacks[i].attackname}!`);
          target.showStatus();
        } else {
          this.ap = 0;
          console.log(`${this.name} has not enough AP left!`);
        }
      }
    }
  }
}

class Attack {
  constructor(attackname, damage, apcost) {
    this.attackname = attackname;
    this.damage = damage;
    this.apcost = apcost;
  }
}

//------------------------pokemon

let vulpix = new Pokemon("^◕?◕^ꋧꋧꋧꋧꋧꋧ", 77, 15);
let eevee = new Pokemon("^◕ω◕^ꋧ", 81, 20);
let pikachu = new Pokemon("ϞϞ (๑⚈ ․̫ ⚈๑)∩", 70, 30);
let jigglypuff = new Pokemon("∇(^◕ਉ◕^)∇", 85, 15);

//------------------------attacks

let tackle = new Attack("tackle", 10, 0);
let swift = new Attack("swift", 30, 15);
let quickAttack = new Attack("quickattack", 15, 10);

let ember = new Attack("ember", 20, 5);
let fireSpin = new Attack("firespin", 35, 10);

let dig = new Attack("dig", 25, 10);

let thunder = new Attack("thunder", 35, 20);

//------------------------learning

vulpix.learnAttack(tackle, ember, fireSpin);
console.log(vulpix);

eevee.learnAttack(tackle, quickAttack, swift, dig);
pikachu.learnAttack(tackle, swift, dig, thunder);

//------------------------battle

console.log(pikachu);
console.log(vulpix);

vulpix.use("tackle", pikachu);
pikachu.use("tackle", vulpix);
vulpix.use("ember", pikachu);
pikachu.use("thunder", vulpix);
vulpix.use("ember", pikachu);
pikachu.apPlus();
pikachu.use("swift", vulpix);
vulpix.use("ember", pikachu);

vulpix.showStatus();
