const Zombie = require('./zombie');
const zombie1 = Zombie(4, [2,1], [[0,1],[1,2],[3,1]], "DLUURR");
console.log("Input:", zombie1.input())
console.log("Results:", zombie1.awake())
const zombie2 = Zombie(1, [0,0], [[0,0]], "DLUURR");
console.log("Input:", zombie2.input())
console.log("Results:", zombie2.awake())

