// +++++++++Immediately Invoked Function Expresions (IIFE)++++++++++++++++

// function chai() {
//     console.log(`DB CONNECTED`)
// }
  
// chai()

// for +++++++(iife)++++++++ one we can use this syntax for function invoke
// ----------> (FUNCTION)()

(function coffee() {  // ---------(NAMED IIFE)
    console.log(`DB CONNECTED`);
})(); // ; is must in iife 

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("ansh")