class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);

    this.power = power;
    this.res = res;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.res -= this.power;
    } else {
      console.log("Target must be a unit!");
    }
    return this;
  }
}
class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  cast(target) {
    if (target instanceof Unit) {
      target.res += this.magnitude;
    } else {
      console.log("Target must be a Unit!");
    }
    return this;
  }
}
//instances
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2,"increase target's resilience by 3","resilience", 3 );
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming =  new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
//hard algorithm played on red belt ninja, adds 3 to res
hardAlgorithm.cast(redBeltNinja);
//unhandled promise rejection played on red belt ninja, subtracts 2 from res
unhandledPromiseRejection.cast(redBeltNinja);
//pair programming played on red belt ninja, adds 2 to res
pairProgramming.cast(redBeltNinja);
//red belt ninja uses attack method on black belt ninja
redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja);
console.log(blackBeltNinja);