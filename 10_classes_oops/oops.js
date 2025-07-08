const user = {
    username: "ANSH",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// // console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()
const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;
}

const userOne = new User("ANSH", 24, true)
const userTwo = new User("ANSH RAJ", 53, true)
console.log(userOne);
console.log(userTwo);
