class results{
    constructor(){
        this.username = "manthan"
        this.adminUser = "Manthan"
        this.email = "manthan@gmail.com"
        this.phone = 123456
        this.passwoard = "manthan@123"
        this.marks = 23
        this.grid = 8212
        this.address = "No where"
    }

    login(username,passwoard){
        if(this.username == username && this.passwoard == passwoard){
            return this
        }
        else{
            return "Invalid"
        }

    }
}


class subresult extends results{

    login(username,passwoard){
        if(this.username == username && this.passwoard == passwoard){
            return this.email + this.phone
        }
        else{
            return "Invalid"
        }

    }
}

let obj = new results()
let obj2 = new subresult()


let user = "manthan"
let pass = "manthan@123"
console.log(obj2.login(user,pass))