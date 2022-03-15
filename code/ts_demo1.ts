// type annotation 类型注解，我们来告诉 TS 变量是什么类型
// type inference 类型推断， TS 会自动的去尝试分析变量类型
// 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// let count: number
// count = 123

//类型注解
const a: number = 1
const b: string = 'hello'
console.log(a, b)

//类型推断
const c = 1
const d = 2
console.log(c + d)

function getTotal(a: number, b: number) {
  return a + b
}
console.log(getTotal(1, 2))

const obj = {
  name: 'dell',
  age: 18,
}
