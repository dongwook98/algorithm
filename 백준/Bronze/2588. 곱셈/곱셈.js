// 입력 472
       385
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0]; // 472
const b = input[1]; // 385

const x_1 = b[2] // 일의자리(5)
const x_10 = b[1] // 십의자리(8)
const x_100 = b[0] // 백의자리(3)

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_10));
console.log(Number(a) * Number(x_100));
console.log(Number(a) * Number(b));