// function add(first: number, second: number): number {
//   return first + second
// }

// const total = add(1, 2)
// console.log(total)

// //void 没有返回值
// function sayHello(): void {
//   console.log('hello')
// }

// var say = sayHello()
// //never 返回值类型
// function errorEmitter(): never {
//   // throw new Error()
//   // while (true) {}
// }

function add({ first, second }: { first: number; second: number }): number {
  return first + second
}

const total = add({ first: 1, second: 2 })

function getNumber({ first }: { first: number }) {
  return first
}

const count = getNumber({ first: 1 })
