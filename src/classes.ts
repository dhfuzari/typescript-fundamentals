// A basic Ts Class
class UserAccount {
  age: number;
  name: string;

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
console.log(dhFuzari.name);
dhFuzari.logDetails();

// Extending classes
class CharAccount extends UserAccount {
  nickName: string;
  level: number;

  constructor(nickName: string, level: number, age: number, name: string) {
    super(age, name);
    this.nickName = nickName;
    this.level = level;
  }
}

const dhFuzariChar = new CharAccount('gcFuzari', 100, 64, 'Geraldo C. Fuzari');
dhFuzariChar.logDetails();