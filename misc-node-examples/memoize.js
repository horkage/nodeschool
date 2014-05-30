function memoize(f) {
  if (f instanceof Function) {
    if (f.length == 0 || f.length > 1) return f

    var fn = function(x) {
      if (fn.memoizer.values[x] == null) {
        fn.memoizer.values[x] = f.call(f, x)
      }
      return fn.memoizer.values[x]
    }

    fn.memoizer = { values : [] }
    return fn
  } else {
    return f
  }
}

function fibonacci(idx) {

  console.log(idx)
  if (idx == 0) return 0
  if (idx == 1) return 1
  return fibonacci(idx-2) + fibonacci(idx-1)

}
var bob = fibonacci(5)
console.log(bob)

// reduced as..
fib(5)
fib(4) + fib(3)
(fib(3) + fib(2)) + fib(3)
((fib(2) + fib(1)) + fib(2)) + fib(3)
((1 + 1) + fib(2)) + fib(3)
(2 + fib(2)) + fib(3)
(2 + 1) + fib(3)
3 + fib(3)
3 + (fib(2) + fib(1))
3 + (1 + 1)
3 + 2
5

//var mFib = memoize(fibonacci)
//var bob = mFib(10)
//console.log(bob)
