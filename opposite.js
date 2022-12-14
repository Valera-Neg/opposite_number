/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:
1: -1
14: -14
-34: 34
*/


function opposite(num) {
  return num < 0 ? Math.abs(num) : num === 0 ? 0 : -Math.abs(num);
}

console.log(opposite(1)) //> -1
console.log(opposite(0)) //> 0
console.log(opposite(4.25)) //> -4.25
console.log(opposite(3.3333333)) //> -4.25
console.log(opposite(-12525220.3325)) //> 12525220.3325
console.log(opposite(-5)) //> 5