// variables in javascript:

const accountId = 12345; // const is recommended to use for constant variables.
let accountEmail = "raja@gmail.com"; // let is recommended to use for block scope.
var accountPassword = 25766; // var is not recommended to use because it is a global variable.
accountCity = "Kathmandu"; // without using any keyword, it is a global variable.

let accountState; // declaring a variable and it is undefined.

// accountId = 54321; // Error: Assignment to constant variable.
accountEmail = "pandey@gmail.com";
accountPassword = 12345;
accountCity = "Pokhara";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
