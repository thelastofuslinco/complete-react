export class Person {
  name: string
  age: number

  constructor(name, age = 0) {
    this.name = name
    this.age = age
  }

  get get_gretting() {
    return `Hi. I am ${this.name}`
  }

  get get_description() {
    return `${this.name} is ${this.age} years(s) old`
  }
}
