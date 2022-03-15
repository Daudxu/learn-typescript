//GETTER SETTER
// class Person {
//   constructor(private _name: string) {}
//   get naem() {
//     return this._name + ' lee'
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0]
//     this._name = realName
//   }
// }
// const persona = new Person('dell')
// console.log(persona.name)
// persona.name = 'dell lee'
// console.log(persona.name)

// 单例
// class Demo {
//   private static insance: Demo
//   private constructor(public name: string) {}
//   static getInstance() {
//     if (!this.insance) {
//       this.insance = new Demo('dell lee')
//     }
//     return this.insance
//   }
// }

// const demo1 = Demo.getInstance()
// const demo2 = Demo.getInstance()
// console.log(demo1.name)
// console.log(demo2.name)
