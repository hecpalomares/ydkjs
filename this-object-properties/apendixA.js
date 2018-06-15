// ES6 Class
class Person {
  constructor(name = "John Doe", age = 25, gender = "male") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  happyBirthday(years) {
    this.age = this.age + years;
  }

  sayIntroduction() {
    return `Hello I'm ${this.name} a ${this.gender} that is ${this.age} years old.`;
  }
}

class Warrior extends Person {
  constructor(name, age, gender, skill) {
    super(name, age, gender);
    this.skill = skill;
  }

  happyBirthday() {
    super.happyBirthday(2);
  }

  saySkill() {
    return `My skill preference is ${this.skill}`;
  }
}

class Mage extends Person {
  constructor(name, age, gender, spell) {
    super(name, age, gender);
    this.spell = spell;
  }

  happyBirthday() {
    super.happyBirthday(4);
  }

  saySpell() {
    return `My spell preference is ${this.spell}`;
  }
}

let gandalf = new Mage("Gandalf", 400, "God", "White Magic");
gandalf.happyBirthday();
console.log(gandalf.sayIntroduction());

let aragon = new Warrior("Aragon", 100, "male", "Broadsword");
aragon.happyBirthday();
console.log(aragon.sayIntroduction());

// Problems "solved"
// 1. No more prototypes clutering the code
// 2. Mage and Warirrior inherit directly (extends) from Person
// 3. super(...) give is relative polymorphism (method at one level of the chain can refer relatively one level up the chain to a method of the same name)
// 4. class syntax only affords methods, functions shared across all instances
// 5. extends can even be used on built-in methods

// However 'class' make it a static definition. JS makes any object or function to be mutable, dynamic and fluid. It hides the most important nature of JS; the live delegation links between objects.