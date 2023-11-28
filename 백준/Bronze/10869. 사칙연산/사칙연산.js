// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B(몫), 다섯째 줄에 A%B를 출력한다.

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// ['1', '2']
const data = input[0].split(' ');

const a = parseInt(data[0]);
const b = parseInt(data[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);