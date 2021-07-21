class Hero {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
}
Hero.prototype.whoAreYou = function () {
  console.log(`My name is ${this.name} and I am a ${this.occupation}`);
};

const hero1 = new Hero("Michaleganhello", "Ninja");
hero1.whoAreYou();
