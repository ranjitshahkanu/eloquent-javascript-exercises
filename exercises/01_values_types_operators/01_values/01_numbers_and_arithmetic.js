import { benchmark } from "../../../src/common/timer.js";
benchmark("sum using while loop", () => {
let number1 = 4;
let number2 = 12;
console.log("The different arthmetic operation on",number1,"and",number2,"are:",);
console.log(number1, "+", number2, "=", number1 + number2);
console.log(number1, "-", number2, "=", number1 - number2);
console.log(number1, "*", number2, "=", number1 * number2);
console.log(number1, "/", number2, "=", number1 / number2);
console.log(number1, "%", number2, "=", number1 % number2);
});