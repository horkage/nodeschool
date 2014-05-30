/*
var data = {
  "name": "lorem-ipsum", 
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}
*/

function getDependencies(tree, acc) {
  acc = acc || []
  Object.keys(tree).forEach(function(key) {
    if (typeof tree[key] === 'object') {
      var str = key + '@' + tree[key].version
      if (key != 'dependencies' && acc.indexOf(str) === -1) acc.push(str)
      getDependencies(tree[key], acc)
    }
  })
  return acc.sort()
}

module.exports = getDependencies

//console.log(getDependencies(data, null))

/*

  function getDependencies(mod, result) {
    result = result || []
    var dependencies = mod.dependencies || []
    Object.keys(dependencies).forEach(function(dep) {
      var key = dep + '@' + mod.dependencies[dep].version
      if (result.indexOf(key) === -1) result.push(key)
      getDependencies(mod.dependencies[dep], result)
    })
    return result.sort()
  }
  
  module.exports = getDependencies

*/
