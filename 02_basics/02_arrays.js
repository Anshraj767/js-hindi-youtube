const marvel_heroes = ["thor", "Ironman", "spideman"]
const dc_heroes = ["superman", "flash", "batman"]


//  marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);


// const all_New_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_New_Heroes)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Ansh"))
console.log(Array.from("Ansh"))
console.log(Array.from({name: "Ansh"}))  // intresting case for interview


let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));
