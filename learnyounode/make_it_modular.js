var myModule = require('./make_it_modular-module')

myModule(process.argv[2], process.argv[3], function(err,files) {
  if (err) return console.error('There was an error:', err)
  files.forEach(function(file) { 
    console.log(file)
  })
})

/*

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })

*/
