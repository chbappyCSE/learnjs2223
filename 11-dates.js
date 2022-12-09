const d = new Date();
let newd = d.toISOString();

// console.log(newd);

/* Date Formats */

/* JS Date Get Method */

let times = d.getTime();
let fullyears = d.getFullYear();
let monthss = d.getMonth();
let dates = d.getDate();


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Thursday", "Wednesday", "Thursday", "Friday"];
console.log(dates + " " + months[d.getMonth()] + " " + fullyears + " - " + days[d.getDay()]);