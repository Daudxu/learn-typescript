const add = (x:number,y:number,z?:number):number =>{
    if(typeof z === 'number'){
        return x + y + z
    }else{
        return x + y
    }    
}


interface isum {
    (x:number,y:numberm,z?:number):number
}
let add2: isum = add