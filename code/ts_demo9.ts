let arrOfNumbers:number[] = [1,2,3]
arrOfNumbers.push(3)
console.log(arrOfNumbers)

function test(){
    console.log(arguments)
}
test()

// 元祖
let user:[string,number] = ['viking',20] 
user.push(1)
user.push('2')
