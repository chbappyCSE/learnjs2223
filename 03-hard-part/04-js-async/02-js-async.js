// By default sync
function hello() {
    console.log('Line 2 code');
}
console.log('Line 1 code');
hello();
console.log('Line 3 code');

// Async example ---- setTimeout() it is async function.

console.log('line 4 code');

/* setTimeout(function() {
    console.log('Line 5 code');
}, 2000);
 */
// setInterval --- holo time por por repeat kora -- eato async function 

setInterval(function() {
    console.log('Line 5 code!');
}, 2000);

console.log('line 6 code');