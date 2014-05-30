var q = require('q')
var defer = q.defer()

defer.promise.then(console.log, console.log)

defer.resolve('I FIRED')
defer.reject('I DID NOT FIRE')

/*

      var q = require('q')
        , def = q.defer();
    
      def.promise.then(console.log, console.log);
      def.resolve("I FIRED");
      def.reject("I DID NOT FIRE");

*/
