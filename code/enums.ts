// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Up)
// console.log(Direction[0])

// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right',
// }
// const value = 'Up'
// if (value === Direction.Up) {
//   console.log('GO UP!')
// }
// 常量值 计算值
const enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
const value = 'Up'
if (value === Direction.Up) {
  console.log('GO UP!')
}
