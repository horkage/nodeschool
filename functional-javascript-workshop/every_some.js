function checkUsersValid(listOfGoodUsers) {
  return function(listOfCandidates) {
    return listOfCandidates.every(function(candidate) {
      return listOfGoodUsers.some(function(goodUser) {
        return candidate.id === goodUser.id
      })
    })
  }
}

/*
var goodUsers = [
  { id:1 },
  { id:2 },
  { id:3 }
]

var candidates01 = [
  { id:3 },
  { id:1 }
]

var candidates02 = [
  { id:1 },
  { id:2 },
  { id:54 }
]

var generatedFunction = checkUsersValid(goodUsers);
console.log(generatedFunction(candidates01))
console.log(generatedFunction(candidates02))
*/

module.exports = checkUsersValid

/*

  module.exports = function checkUsersValid(users) {
    return function(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {
        return users.some(function(user) {
          return user.id === submittedUser.id
        })
      })
    }
  }

*/
