// A basic Ts Class
class BasicUserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}


// An abstract class can't be instantiated, and it's purpose  
// is to be used as base for other classes
abstract class AbstractUserAccount {
  public age: number; // public access modifier - You can get and access it even out of the class scope
  readonly name: string; // readonly access modifier - You can read it, but you can't set it without of the class definition

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}


// Extending classes
class CharAccount extends AbstractUserAccount {
  private nickName: string; // private access modifier - You can't get and even set the value without of the class definition
  protected level: number; // protected access modifies - You can access this member from it's class ou it's subclasses

  constructor(nickName: string, level: number, age: number, name: string) {
    super(name, age);
    this.nickName = nickName;
    this.level = level;
  }

  logDetailsChar(): void {
    console.log(`The player ${this.name}  the char ${this.nickName} at level ${this.level}`);
  }

  get getLevel() {
    return `My level is ${this.level}`;
  }

  set setLevel(level: number) {
    this.level = level;
  }
}

const dhfuzari = new BasicUserAccount('Daniel H. Fuzari', 38);
console.log(dhfuzari);
dhfuzari.logDetails();

const gcFuzariChar = new CharAccount('gcFuzari', 100, 64, 'Geraldo C. Fuzari');
gcFuzariChar.logDetails();
gcFuzariChar.logDetailsChar();
gcFuzariChar.age = 65;
console.log(gcFuzariChar.age);
console.log(gcFuzariChar.name);
console.log(gcFuzariChar.getLevel);
gcFuzariChar.setLevel = 499;
console.log(gcFuzariChar.getLevel);
console.log(gcFuzariChar.name);
