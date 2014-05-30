var q = require('q')
var defer = q.defer()

defer.promise.then(console.log)
defer.resolve('SECOND')
console.log('FIRST')

/*

      var q = require('q')
        , deferred = q.defer();
    
      deferred.promise.then(console.log);
      deferred.resolve("SECOND");
      console.log("FIRST");

*/
