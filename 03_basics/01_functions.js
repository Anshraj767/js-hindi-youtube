// ++++++++++++++++++++++ basic function declaration ++++++++++++++++++++++++
function saymyname (){
    console.log("A");
    console.log("n");
    console.log("s");
    console.log("h");
}
// saymyname();

// ++++++++++++++++++++++++ passing parameter in functions +++++++++++++++++++++++++++++

// function addTwoNumbers (number1, number2){// here number1 and number2 is parameters
//     console.log(number1 + number2);
    
// }

function addTwoNumbers (number1, number2){// here number1 and number2 is parameters
    // let result = number1 + number2;
    // return result;    
    // console.log("ANSH") // after return no line of code is considered 
    return number1 + number2
}

const result = addTwoNumbers(3, 4) // here 3 and 4 is arguments
// console.log("Result: ",result);

// +++++++++++++++++++++++ input varifying +++++++++++++++++++++

function loginUserMessage(username = "guest"){
    if(username === undefined){  //(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


// ++++++++++++++++++++ function for infinite parameter +++++++++++++++++++++++++++++
function calculateDartPrice(...num1) {
    return num1
}

// console.log(calculateDartPrice(200, 300, 400))

//

const user = {
    username: "ansh",
    price: 199
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "ansh",
    price: 399
})

// ++++++++++++++++++++++  arrays in function +++++++++++++++++++++++++++++
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
