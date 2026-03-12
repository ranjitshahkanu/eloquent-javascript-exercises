import { benchmark } from "../../src/common/timer.js";

benchmark("sum using while loop", () => {
  let count = 1;
  let total = 0;

  while (count <= 10) {
    total += count;
    count += 1;
  }

  console.log("The sum of number from 1 to", count - 1, "is", total);
});