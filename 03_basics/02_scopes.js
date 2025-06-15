// ----------------GLOBAL SCOPE ------------------------------

// var c = 300

let a = 300;
if(true){                       //------|
    let a = 10                  //      |---Block scope {data from the global can be accessed in block but can't be vice versa}
    const b = 20                //      |
    var c = 30                  //------|
    // console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ansh"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if(true){
    const username = "ansh"
    if(username === "ansh"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)

}

// console.log(username);


// +++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++

// funtion declaration types and hoisting 

//Type one
console.log(addOne(5))
function addOne (num){
    return num + 1
}

// console.log(addOne(5))

// Type two
// console.log(addTwo(5)) // can't run because the function is been declared in variable
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))