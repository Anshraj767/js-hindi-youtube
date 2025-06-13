// Stack (Primitive), Heap memory(Non-primitive)

let myCarName = "XUV300"

let anotherName = myCarName
anotherName = "BMW"

console.log(myCarName);
console.log(anotherName);


let userOne = {
    email: "rajansh767@gmail.com",
    upi: "user@ansh"
}

let userTwo = userOne

userTwo.email = "ansh@email.com"

console.log(userOne.email)
console.log(userTwo.email)


//               STACK                                           HEAP
//
//          |_________________|                   _________________________________________
//          |____userTwo______|----reference---->|                                         |
//          |____userOne______|----reference---->|    let userOne = {,                     |
//          |___mycarname_____|<---|             |       email: "rajansh767@gmail.com",    |
//          |__anothername____|    |copy         |       upi: "user@ansh"                  |  
//          |___mycarname_____|----|             |                   }                     |
//                                               |_________________________________________|
// 

