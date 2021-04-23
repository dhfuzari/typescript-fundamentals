// A basic Ts Class
class UserAccount {
  public age: number; // public access modifier - You can get and access it even out of the class scope
  protected name: string; // protected access modifies - You can access this member from it's class ou it's subclasses

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

const dhFuzari = new UserAccount(37, 'Daniel H. Fuzari');
console.log(dhFuzari);
console.log(dhFuzari.age);
dhFuzari.logDetails();

// Extending classes
class CharAccount extends UserAccount {
  private nickName: string; // private access modifier - You can't get and even set the value without of the class definition
  readonly level: number; // readonly access modifier - You can read it, but you can't set it without of the class definition

  constructor(nickName: string, level: number, age: number, name: string) {
    super(age, name);
    this.nickName = nickName;
    this.level = level;
  }

  logDetailsChar(): void {
    console.log(`The player ${this.name}  the char ${this.nickName} at level ${this.level}`);
  }
}

const gcFuzariChar = new CharAccount('gcFuzari', 100, 64, 'Geraldo C. Fuzari');
gcFuzariChar.logDetails();
gcFuzariChar.logDetailsChar();
console.log(gcFuzariChar.level);
gcFuzariChar.age = 65;
console.log(gcFuzariChar.age);