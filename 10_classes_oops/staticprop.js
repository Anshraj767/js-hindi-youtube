class User {
    constructor(username){
        this.username = username
    }

    logme(username){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`;
    }
}

const Ansh = new User("Ansh")
console.log(Ansh.createId())

class Teacher extends User{
    constructor(email){
        super(this.username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com",)
console.log(iphone.logme);