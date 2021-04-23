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
