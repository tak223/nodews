const fs = require('fs');
var buf = fs.readFileSync( process.argv[2]);
const str = buf.toString();
var arr = str.split('\n');
console.log(arr.length-1);