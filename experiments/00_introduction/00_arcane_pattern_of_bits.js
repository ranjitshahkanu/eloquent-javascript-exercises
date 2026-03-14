import { benchmark } from "../../src/common/timer.js";
benchmark("sum using while loop", () => {
let total = 0;
let count = 1;
let compare = 1;
while(compare - 11 != 0){
    total = total + count;
    count = count + 1;
    compare = count;

}
console.log(total);
});