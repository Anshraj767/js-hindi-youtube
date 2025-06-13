const name = "ANSH"
const repocount = 50

// console.log(name + repocount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repocount}');


const gameName = new String('gta6-2026-com')
console.log(gameName[2]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf(6));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(0,3)
console.log(anotherString)

const newStringOne = "     ansh    "
console.log(newStringOne);
console.log(newStringOne.trim())


const url = "https://ansh.com/ansh%20raj"
console.log(url.replace('%20','-'))


console.log(url.includes('ansh'))


console.log(gameName.split('-'))