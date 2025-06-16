const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// trying in arrays

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key])
}

// trying on maps - (iteration cant be done in maps)

// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('USA', "Unites States of America" )
// map.set('Fr', "France") 
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key)
// }