 
 let random = Math.random()

let a =prompt("Enter YOur First NUmber")
let c =prompt("Enter YOur operation  NUmber")
let b =prompt("Enter YOur Second NUmber")

console.log(random)
let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

 if(random >0.1){
    // correct operation

    alert(  `result is ${eval(`${a} ${c} ${b}`)}`)
 }


 else{
    // perform false value
    c= obj[c]
    alert(  `result is ${eval(`${a} ${c} ${b}`)}`)
 }