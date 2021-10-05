import fruits from "./foods.js";
import {choice, remove}  from  "./helpers.js";

console.log(fruits);
const fruit = choice(fruits);
console.log(
    `I'd like one ${fruit}, please.
    Here you go: ${fruit}
    Delicious! May I have another?`
)

remove(fruits, fruit);
console.log(`
    I'm sorry, we're all out.
    We have ${fruits.length} left.`)