

function one(){
    console.log("first ")
    let x=3
    return two(x)
}

function two(x){
    let y=3
    return three(x,y)
}

function three(x,y){
    return (x+y)
}


 one()