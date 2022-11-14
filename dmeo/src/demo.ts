//   test
// const teacher: string = "dell"

// function abc(name:any) {
//     return name;
// } 

// const teacher: String = "ABC";
// function add(first: string | number){

// 枚举
// enum Sa {
//     aaa = 1,
//     bbb,
//     ccc
// }

// console.log(Sa.aaa)

// 泛型

function join <ABC> (first:ABC, second:ABC) {
    return `${first}${second}`;
}

join <string>("1","b")


function sa<T,P> (first:T, second: P){
    return `${first}${second}`;
}

sa <string, number>('1', 2)

function map<T>(params: Array<T>){
    return params
}