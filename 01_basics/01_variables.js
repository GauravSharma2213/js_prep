const accountId = 144553
let accountEmail = "gaurav@gmail.com"
var accountPassword = "12345"
accountCity = "Toronto"

// accountId = 2 this is not allowed by node

accountEmail = "stc@gmail.com"
accountPassword = "32425269"
accountCity = "Oakville"
let accountState;
// if you leave any variable like this, after printing it will show as undefined

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and funcional scope
*/

console.table([accountId, accountEmail , accountPassword, accountCity]);