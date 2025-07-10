class User {
    constructor(email, password){
        this.email =  email;
        this.password = password
    }

    get email(){
        return this._email.toUppercase()
    }
    set email(value){
        return this._email
    }
    get password(){
        return `${this._password}ansh`
    }
    set password(value){
        this._password = value
    }
}

const ansh = new User("a@ansh.ai", "abc")
console.log(ansh.password);