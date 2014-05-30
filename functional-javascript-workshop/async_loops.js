function loadUsers(userIds, load, done) {
  var users = []
  var count = 1;
  userIds.forEach(function(userId, index) {
    load(userId, function(user) {
      users[index] = user
      if (count == userIds.length) {
        done(users)
      }
      count++
    })
  })
}

module.exports = loadUsers

/*

  function loadUsers(userIds, load, done) {
    var completed = 0
    var users = []
    userIds.forEach(function(id, index) {
      load(id, function(user) {
        users[index] = user
        if (++completed === userIds.length) return done(users)
      })
    })
  }
  
  module.exports = loadUsers

*/
