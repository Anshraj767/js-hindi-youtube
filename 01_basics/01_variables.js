const accountId = 14453
let accountEmail = "rajansh767@gmail.com"
var accountPassword = 123456
accountCity = "Bhilai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ansh@email.com"
accountPassword = "2324"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
