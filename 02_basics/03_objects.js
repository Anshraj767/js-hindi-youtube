// singleton
// Object.create


// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "ANSH",
    "full name": "Ansh Raj",
    [mySym]: "mykey1",  //++++++++++++++++++++++++++++++for symbol insertion in object
    age: 20,
    email: "rajansh767@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);// to access email 
// console.log(JsUser["email"]);// another one
// console.log(JsUser["fullname"]);// to access fullname
// console.log(JsUser[mySym]);// to access symbol value stored in object


// JsUser.email = "anshraj767@gmail.com";
// console.log(JsUser["email"]);
// Object.freeze(JsUser);
// JsUser.email = "rajansh767@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name} `)
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())