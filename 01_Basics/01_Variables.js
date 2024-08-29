const accountId = 14432;
let accountName = "Aman";
var accountEmail = "aman@gmail.com";
accountPassword = "1223";
let accountState;

// accountId = 2 // Assignment to constant variable not allowed

accountName = "Anuj";
accountEmail = "anuj@gmail.com";
accountPassword = "456789";

// Prefer not to use var because of the issue in block scope and functional scope
// let have block scope

console.table([
  accountId,
  accountName,
  accountEmail,
  accountPassword,
  accountState,
]);