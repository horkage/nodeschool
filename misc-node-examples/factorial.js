function factorial(n) {
  function recur(n, acc) {
    console.log(n, acc)
    if (n == 0) {
      return acc
    } else {
      var bob = n - 1
      var fred = n * acc
      console.log('bob: ' + bob + ' fred: ' + fred)
      return recur(n-1, n*acc)
    }
  }
  console.log('returning recursive invokation')
  return recur(n, 1)
}

var bob = factorial(5)
console.log(bob)
