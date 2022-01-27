const arr: (number | string)[] = [1, '2', 3]
const stringArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined]

// type alias 类型别名
type User = { name: string; age: number }

class Teacher {
  aname: string
  age: number
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    aname: 'dell',
    age: 28,
  },
]

//元组 tuple
