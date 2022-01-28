// private, protected, public 访问类型
// public 允许我在类内外调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用
// class Person {
//   private name: string
//   public sayHi() {
//     this.name
//     console.log('hi')
//   }

//   private sayABC() {
//     this.name
//   }
// }

// class Teacher extends Person {
//   public sayBye() {
//     this.sayAbc()
//   }
// }

// const person = new Person()
// person.name = 'dell'
// console.log(person.name)
// person.sayHi()

// class Person {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// const persona = new Person('dell')
// console.log(persona.name)

class Person {
  // constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    super()
  }
}
const teacher = new Teacher(28)
console.log(teacher.age)
// console.log(teacher.name)
