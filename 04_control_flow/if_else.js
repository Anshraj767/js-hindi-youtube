// if


const temperature = 41

// if( temperature < 50){
//     console.log("temperature is less than 50")
// } else {
//     console.log("temperature is greater than 50")
// }

// <, >, <=, >=, ==, !=, ===, !==


const score = 200

// if(score > 100){
//     const power = "fly" // let and const should be used only not var anytime
//     console.log(`User power: ${power}`)
// }


const balance = 1000

// if(balance > 500) console.log("test"); // this is called implicit scope


// if (balance < 500) {
//     console.log("less than");

// } else if(balance < 750) {
//     console.log("less than 750");

// } else if(balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}