var q = require('q');
var def = q.defer();
var util = require('util')

def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED?");

console.log(util.inspect(def.promise))

