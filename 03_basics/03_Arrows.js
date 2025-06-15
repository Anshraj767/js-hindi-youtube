const user = {
    username: "ansh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) // to refer current contest we prefer this* keyword
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()

// console.log(this) // will show empty scope as no context in the global


// function chai(){
//     let username = "ansh"
//     console.log(this.username)// ---this.username will work in objects only not in function
// }

// chai()


// =>=>=>=>=>=>=>=>=>=>=>=>=>=>=> ARROW FUNCTION <=<=<=<=<=<=<=<=<=<=<=<=

// const chai = () => {
//     let username = "ansh"
//     console.log(this.username)
// }

// chai()


const addTwo = (num1, num2) => {
    return num1 + num2
}

// ++++++++++++++++(Implicit return) other way to declare =>=>=>=> arrow function <=<=<=<=
const addTwo = (num1, num2) => num1 + num2
// -------------------OR----------------
const addTwo = (num1, num2) => (num1 + num2)
// -------------------OR----------------
const addTwo = (num1, num2) => ({username: "ansh"}) // for object wrapping of parameters in paranthesis is must

console.log(addTwo(3, 4))
