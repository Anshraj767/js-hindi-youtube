class User {
    constructor(username){
        this.username = username
    }

    logme(username){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const 