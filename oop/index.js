

class parent{


    constructor(){
        this.name = "rw"
        this.email = "rw@gmail.com"
        this.number = 2
    }

    setmail(m){
        this.email = m
    }

    square(){
        return this.number*this.number
    }
}


class small extends parent{
    square(){
        return this.number*this.number*this.number
    }
}

let obj = new parent()
let obj2 = new small()


obj.setmail("man@gmail.com")
console.log(obj2.square())
// console.log(obj.email)