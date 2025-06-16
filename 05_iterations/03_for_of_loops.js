// for of

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) { // the greet is basically taken in place of i*
    // console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', "Unites States of America" )
map.set('Fr', "France")

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// ---- trying on object ----
const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// continues in next file..........
