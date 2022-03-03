export default class Client {
  private name: String;
  private age: Number;
  private email: string

  create(name: string, email: string, age?: Number): void {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  read(): any {
    return {
      name: this.name,
      age: this.age,
      email: this.email
    }
  }
  update(name: string, email?: string, age?: Number): void {
    this.name = name;
    this.age = age ? age : this.age;
    this.email = email ? email : this.email;
  }
  delete(): void {

  }
}