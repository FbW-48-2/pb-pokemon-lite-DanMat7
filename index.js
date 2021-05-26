class Pokemon {
  constructor(name, hp, ap, attacks) {
    this.name = name;
    this.hp = hp;
    this.hpTotal = hp;
    this.ap = ap;
    this.attacks = [];
  }

  learnAttack(...attackObj) {
    this.attacks.push(...attackObj);
  }

  showStatus() {
    function hpBar(hpnum) {
      //turning hp value into hpbar
      let hp = [];
      for (let i = 0; i < hpnum / 5; i++) {
        hp.push("=");
      }
      return hp.join("");
    }
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(`${this.name} was K.O.ed`);
    } else {
      console.log(
        `${this.name} HP: ${hpBar(this.hp)} ${this.hp}/${this.hpTotal}  AP: ${
          this.ap
        }`
      );
    }
  }

  apPlus() {
    this.ap = this.ap + 10;
    console.log(`${this.name}'s AP were restored. (Total: ${this.ap})`);
    console.log("------------------------------------------");
  }
  potion() {
    this.hp = this.hp + 20;
    console.log(`${this.name}'s HP were restored. (Total: ${this.hp})`);
    console.log("------------------------------------------");
  }

  use(attack, target) {
    if (this.hp > 0) {
      // can only fight with hp
      if (Math.floor(Math.random() * 10 + 1) <= 8) {
        // adding miss chance
        for (let i = 0; i < this.attacks.length; i++) {
          // use attackname to launch attack
          if (attack == this.attacks[i].attackname) {
            this.ap = this.ap - this.attacks[i].apcost; //
            if (this.ap >= 0) {
              if (Math.floor(Math.random() * 10 + 1) <= 2) {
                // adding crit chance
                target.hp = target.hp - (this.attacks[i].damage + 5);
                this.showStatus();
                console.log(`${this.name} used ${this.attacks[i].attackname}!`);
                console.log("A Critical Hit!");
                target.showStatus();
                console.log("------------------------------------------");
              } else {
                //regular attack
                target.hp = target.hp - this.attacks[i].damage;
                this.showStatus();
                console.log(`${this.name} used ${this.attacks[i].attackname}!`);
                console.log("\n");
                target.showStatus();
                console.log("------------------------------------------");
              }
            } else {
              //no Ap
              this.ap = 0;
              console.log(`${this.name} has not enough AP left!`);
              console.log("------------------------------------------");
            }
          }
        }
      } else {
        //missed
        this.showStatus();
        console.log("The Attack failed!");
        console.log("\n");
        target.showStatus();
        console.log("------------------------------------------");
      }
    } else {
      // hp 0
      console.log("This Pokemon can not fight anymore");
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

let vulpix = new Pokemon("^◕?◕^ꋧꋧꋧꋧꋧꋧ", 75, 15);
let eevee = new Pokemon("^◕ω◕^ꋧ", 80, 20);
let pikachu = new Pokemon("ϞϞ (๑⚈ ․̫ ⚈๑)∩", 70, 30);
let jigglypuff = new Pokemon("∇(^◕ਉ◕^)∇", 85, 15);

//------------------------attacks

let tackle = new Attack("tackle", 10, 0);
let swift = new Attack("swift", 30, 15);
let quickAttack = new Attack("quickattack", 15, 10);
let pound = new Attack("pound", 15, 0);
let bodyslam = new Attack("bodyslam", 30, 10);

let ember = new Attack("ember", 20, 5);
let fireSpin = new Attack("firespin", 35, 10);

let dig = new Attack("dig", 25, 10);

let thunder = new Attack("thunder", 35, 20);

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
pikachu.apPlus();
pikachu.use("swift", vulpix);
vulpix.use("ember", pikachu);

vulpix.showStatus();

//------------------------battle1

console.log(eevee);
console.log(jigglypuff);

eevee.use("quickattack", jigglypuff);
jigglypuff.use("pound", eevee);
eevee.potion();
eevee.use("quickattack", jigglypuff);
jigglypuff.use("swift", eevee);
eevee.use("quickattack", jigglypuff);
jigglypuff.use("pound", eevee);
eevee.apPlus();
jigglypuff.use("pound", eevee);
eevee.use("dig", jigglypuff);
jigglypuff.use("pound", eevee);
