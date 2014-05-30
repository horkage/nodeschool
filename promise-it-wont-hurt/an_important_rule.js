var q = require('q')
var defer = q.defer()

function throwMyGod() {
  throw new Error('OH NOES')
}


function iterate(n) {
  console.log(n)
  return n + 1
}

q.fcall(iterate, 1)
  .then(iterate, 2)
  .then(iterate, 3)
  .then(iterate, 4)
  .then(iterate, 5)
  .then(throwMyGod)
  .then(iterate, 6)
  .then(iterate, 7)
  .then(iterate, 8)
  .then(iterate, 9)
  .then(iterate, 10)
  .then(null, console.log)


/*
      var q = require('q');
    
      function iterate (num) {
        console.log(num);
        return ++num;
      };
    
      function throwMyGod () {
        throw new Error("OH NOES");
      };
    
      q.fcall(iterate, 1)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(throwMyGod)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(null, console.log);
*/
