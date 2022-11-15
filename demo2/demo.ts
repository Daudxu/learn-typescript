// // 基本类型 boolean, number, string, void, undfind, symbol, null
// let count: number;
// count = 123;

// let str: string = "tom";
// let num: number = 123;
// let bool: boolean = false;
// let u: undefined = undefined;
// let n: null = null;
// let sym: symbol = Symbol("me");

// // 对象类型 对象类型， {}， class, function, []
// const func = (str:string) => {
//     return parseInt(str, 10);
// }

// const func1:(str:string) => number = (str) => {
//     return parseInt(str, 10);
// }

// const date = new Date();

// let obj: object = {x:1};
// let big: bigint = 100n;

// // 其他case
// interface Person {
//     name: 'string'
// }

// const rawData = '{"name":"dell"}';
// const newData: Person = JSON.parse(rawData);


// // 3.2. 注意点

// // let str1:string = "666";
// // str1 = null
// // str1 = undefined

// // let num1:number = 666;
// // num1 = null
// // num1 = undefined

// // let obj:object = {}
// // obj = null
// // obj = undefined

// // let sym:symbol = Symbol("me");
// // sym = null
// // sym = undefined

// // let isDone: boolean = false;
// // isDone = null
// // isDone = undefined

// // let big: bigint = 100n;
// // big = null
// // big = undefined

// // number 和 bigint 不兼容

// // let arr: string[] = ["1","2"]
// // let arr1: Array<string> = ["1","2"]

// // const arr:(number|string)[] = [1, "2", 3]
// // const stringArr: string[] = ["a","b","c"]
// // const undefinedArr: undefined[] = [undefined]

// // type  User = {name:string, age:number};

// // const objectArr: User[] = [
// //     {
// //         name: 'dell',
// //         age: 28
// //     }
// // ]

// // class Teacher {
// //     name: string;
// //     age: number;
// // }

// // const objectArr1: Teacher[] = [
// //     new Teacher(),
// //     {
// //         name: "string",
// //         age: 1
// //     }
// // ]

// // // 元组 固定数量以及形式的数组被称为元组
// // const teacherInfo:[string,string,number] = ['Dell', 'male', 18]
// // // const teacherInfo1: (string|number)[] = ['Dell', 'male', 18]
// // const teacherLisr: [string,string,number][] = [
// //     ['Dell', 'male', 18],
// //     ['Dell', 'male', 18],
// //     ['Dell', 'male', 18]
// // ]

// ========================================
// // // abstract 
// interface Person {
//     // readonly name: string,
//      name: string,
//      age?: number,
//      [propName: string]:any,
//      say(): string
// }

// interface Teacher extends Person {
//     teach(): string;
// }

// interface  SayHi {
//     (word: string) : string
// }

// const getPersonName = (person: Person): void=> {
//     console.log(person.name)
// }

// const setPersonName = (person: Teacher, name: string): void => {
//     person.name = name
// }

// // 只能赋值
// const person = {
//     name: "dell",
//     sex: 'male',
//     say() {
//         return 'hello'
//     },
//     teach() {
//         return 'teach'
//     }
// }

// getPersonName({
//     name: "dell",
//     sex: 'male',
//     say() {
//         return 'hello'
//     },
// });
// setPersonName(person, 'lee')

// class User implements Person {
//     name = "dell";
//     say() {
//         return 'hello'
//     }
// }

// const say: SayHi = (word: string) => {
//     return "111" + word
// }



// class Person {
//     name: string;
//     sayHi() {
//         console.log('hi');
//     }
// }
// ===============================================
// class Person {
//     name = 'dell';
//     getName() {
//         return  this.name;
//     }
// }

// class Teacher extends Person {
//    getTeacherName() {
//        return 'teacher';
//    };
//    getName() {
//     //    return 'aaa'
//        return 'aaa' + super.getName()
//    }
// }

// // const person = new Person();
// const teacher = new Teacher();

// // console.log(person)
// console.log(teacher.getName())
// console.log(teacher.getTeacherName())

// =============================================
// class Person {
//     public name: string;
//     protected sex: string;
//     private height: number;
//     public sayHi() {
//         console.log('hi')
//         console.log('hi', this.height)
//     }
// }
// class Teacher extends Person {
//     public sayBye() {
//         this.sayHi()
//     },
//     // this.sex = 1
// }


// const person = new Person();
// person.name = "dell";
// console.log(person.name);
// person.sayHi();

// ========================================

// class Person {
//     constructor(public name: string){

//     }
// }

// class Teacher extends Person {
//     constructor(public age:number){
//         super('dell')
//     }
// }

// const teacher = new Teacher(20)
// console.log(teacher.age)
// console.log(teacher.name)

// ===============================================

// class Person {
//     constructor(private _name: string) {}
//     get name(){
//        return this._name + " lee"
//     }
//     set name(name:string){
//        const realNmae = name.split(' ')[0]
//        this._name = realNmae;
//     }
// }

// const person = new Person('dell');
// console.log(person.name);
// person.name = "dell lee"
// console.log(person.name)


// ===============================================

// class Demo {
//     private constructor( public name:string) {}

//     private static instance:Demo;

//     static getInstance() {
//         if(!this.instance){
//             this.instance = new Demo("dell lee")
//         }
//         return this.instance;
//     }
// }

// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1.name)
// console.log(demo2.name)

// ===========================================================
// 抽象类

// abstract class Geom{
//    width: number;
//    getType() {
//       return  a
//    }
// }

// class Circle {
//     getArea() {

//     }
// }

// class Square {

// }

// class saasa {

// }



// class Person {
//     public readonly name: string;
//     constructor(name: string) {
//       this.name = name
//     }
// }


// const person = new Person('Dell');
// // person.name = "hello";
// console.log(person.name)

// abstract class Geom {
//    width: number;
//    getType() {
//       return "Gemo"
//    }
//    abstract getArea():number
// }

// class Circle extends Geom {
//     getArea() {
//        return 123;
//     }
// }

// interface Person {
//     name: string
// }


// interface Teachera extends Person {
//    teachingAge: number
// }

// const teachers = {
//    name: "lee",
//    teachingAge: 3
// }

// const getUserInfo = (user: Teachera) => {
//    console.log(user.name)
// }

// getUserInfo(teachers)
