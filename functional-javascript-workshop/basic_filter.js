var map = Array.prototype.map
var filter = Array.prototype.filter

function getShortMessages(objects) {
  return objects.map(function(object) {
    return object.message
  }).filter(function(message) {
    return message.length < 20 
  })
}

var obj1 = { name:"bob", message:"some message 01" }
var obj2 = { name:"fred", message:"some message 02 with some more stuff" }
var obj3 = { name:"george", message:"some message 03" }

var arr = [obj1, obj2, obj3];

console.log(
  getShortMessages(arr)
);



//module.exports = getShortMessages

/*

  module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }

*/

