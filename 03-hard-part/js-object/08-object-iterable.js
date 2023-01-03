// Whst is iterable? iterable holo seta jar vitor Symbol.iterator name property ace. Symbol.iterator ke call kore dile amra ekta iterator pai and setar nex function call kore kore amra looping korte pari.



const nums = [1, 2, 3, 4, 5];
console.dir(nums);
const numIterator = nums[Symbol.iterator]();
console.dir(numIterator);


for (let n of nums) {
    console.log(nums[n]);
}
/* Amra jokhon for of loop use kori for of kivabe jabe je tar loop sesh?  */

console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

// Object is not iterable. How to make object iterable.
const myNumbers = {};

// make it iterable
myNumbers[Symbol.iterator] = function() {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return {
                value: n,
                done: done // let done
            }
        }
    }
}

for (let num of myNumbers) {
    console.log(num);
}