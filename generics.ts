// function echo(arg: any): any {
//   return arg
// }

// const result: string = echo(123)
function echo<T>(arg: T): T {
  return arg
}

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

result2[1]

// 约束泛型
interface sa {
  length: number
}

function toc<T extends sa>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = toc('aaaa')
const obja = toc({ length: 3 })
const arr2 = toc([1, 2, 3, 4, 5, 6])
console.log(str)
console.log(obja)
console.log(arr2)
