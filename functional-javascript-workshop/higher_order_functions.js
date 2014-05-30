var increment = 0;

function repeat(func, n) {
  increment++;
  func();
  if (increment < n) {
    repeat(func, n);
  }
}

module.exports = repeat;

/*
var bob = function() {
  console.log('called');
}
repeat(bob, 5)
*/

/*

  function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
  
  module.exports = repeat

*/
