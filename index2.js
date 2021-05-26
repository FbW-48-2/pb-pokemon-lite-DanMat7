class Pokemon {
  constructor(name, hp, ap, attacks) {
    this.name = name;
    this.hp = this.hp(hp);
    this.ap = ap;
    this.attacks = [];
  }

  hp(hpnum) {
    let hp = [];
    for (let i = 0; i < hpnum / 5; i++) {
      hp.push("=");
    }
    return hp.join("");
  }

  learnAttack(...attackObj) {
    this.attacks.push(...attackObj);
  }

  showStatus() {
    if (this.hp.length <= 0) {
      // this.hp = 0;
      console.log(`${this.name} was K.O.ed`);
    } else {
        console.log('HP:' + this.hp);
        console.log('AP:' + this.ap);
    }
  }

  apPlus() {
    this.ap = this.ap + 10;
    console.log(`${this.name}'s AP were restored. (Total: ${this.ap})`);
  }
  potion() {
    this.hp = this.ap + 20;
    console.log(`${this.name}'s HP were restored. (Total: ${this.hp})`);
  }

  use(attack, target) {
    for (let i = 0; i < this.attacks.length; i++) {
      // to use attack name used a for loop
      if (attack == this.attacks[i].attackname) {
        this.ap = this.ap - this.attacks[i].apcost; //
        if (this.ap >= 0) {
          target.hp = target.hp - this.attacks[i].damage;
          console.log(`${this.name} used ${this.attacks[i].attackname}!`);
          console.log("\n");
          target.showStatus();
          console.log("===============================================");
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

let vulpix = new Pokemon("^◕?◕^ꋧꋧꋧꋧꋧꋧ", 70, 15);
let eevee = new Pokemon("^◕ω◕^ꋧ", 80, 20);
let pikachu = new Pokemon("ϞϞ (๑⚈ ․̫ ⚈๑)∩", 70, 30);
let jigglypuff = new Pokemon("∇(^◕ਉ◕^)∇", 80, 15);

//------------------------attacks

let tackle = new Attack("tackle", 10, 0);
let swift = new Attack("swift", 30, 15);
let quickAttack = new Attack("quickattack", 15, 10);
let pound = new Attack("pound", 10, 0);
let bodyslam = new Attack("bodyslam", 30, 10);

let ember = new Attack("ember", 20, 5);
let fireSpin = new Attack("firespin", 35, 10);

let dig = new Attack("dig", 30, 10);

let thunder = new Attack("thunder", 40, 20);

//------------------------learning

vulpix.learnAttack(tackle, ember, fireSpin);
eevee.learnAttack(tackle, quickAttack, swift, dig);
pikachu.learnAttack(tackle, swift, dig, thunder);
jigglypuff.learnAttack(pound, swift, bodyslam);

//------------------------battle1

console.log(pikachu);
console.log(vulpix);

vulpix.use("tackle", pikachu);
pikachu.use("tackle", vulpix);
vulpix.use("ember", pikachu);
pikachu.use("thunder", vulpix);
vulpix.use("ember", pikachu);
// pikachu.apPlus();
pikachu.use("swift", vulpix);
vulpix.use("ember", pikachu);

vulpix.showStatus();

//------------------------battle1

console.log(eevee);
console.log(jigglypuff);

eevee.showStatus()
