import { benchmark } from "../../../src/common/timer.js";
benchmark ("Basic operations on JavaScript special numbers", () => {

// Positive and Negative  Infinity Special Numbers

console.log("Infinity with Infinity");
console.log(Infinity - Infinity );
console.log(Infinity + Infinity ); // Behaves differently
console.log(Infinity * Infinity ); // Behaves differently
console.log(Infinity / Infinity );
console.log(Infinity % Infinity );
console.log("Infinity with other non Infinity values");
console.log(Infinity - NaN );
console.log(Infinity + Infinity ); // Behaves differently
console.log(Infinity * Infinity ); // Behaves differently
console.log(Infinity / Infinity );
console.log(Infinity % Infinity );


// NaN Special Number 

console.log("NaN with NaN");
console.log(NaN - NaN);
console.log(NaN + NaN);
console.log(NaN * NaN);
console.log(NaN / NaN);
console.log(NaN % NaN);
console.log(0 /0);
console.log("NaN with other non-NaN values");
console.log(NaN - 3);
console.log(NaN + Infinity);
console.log(NaN * "ram");
console.log(NaN / -234);
console.log(NaN % Infinity);
console.log(0 /0);
});
