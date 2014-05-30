var q = require('q')
var defer = q.defer()

function attachTitle(name) {
  return "DR. " + name
}

defer.promise
  .then(attachTitle)
  .then(console.log)

defer.resolve('MANHATTAN')

/*

      var q = require('q')
        , def = q.defer();
    
      function attachTitle (name) {
        return "DR. " + name;
      }
    
      def.promise
      .then(attachTitle)
      .then(console.log);
    
      def.resolve("MANHATTAN");

*/
