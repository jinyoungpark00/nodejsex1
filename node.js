const fs = require('fs');

//sync
console.log(1);
const data = fs.readFileSync('text.txt', {encoding: 'utf-8'});
console.log(data);

//async
console.log(2);

fs.readFile('text.txt', {encoding: 'utf-8'}, function(err, data){
  console.log(3)
  console.log(data);
});
console.log(4);