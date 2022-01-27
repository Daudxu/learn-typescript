// 基础类型 boolean， number， string， void， undfined, symbol, null
let sa: number
sa = 123
console.log(sa)
//对象类型， {}, Class, function, []
const func = (str: string): number => {
  return parseInt(str, 10)
}

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10)
}

const date: Date = new Date()

// 其他 case
interface Person {
  name: 'string'
}
const rawDara = '{"name":"dell"}'
const newData: Person = JSON.parse(rawDara)

let temp: number | string = 123
temp = '456'
