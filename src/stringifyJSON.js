// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } 
  
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var arrayStr = [];
      
      for (var i = 0; i < obj.length; i++) {
        arrayStr.push(stringifyJSON(obj[i]));
      }

      return '[' + arrayStr.join() + ']';
    }    
  }
  
   if (typeof obj === 'object') {
    
    if (obj.keys === 0) {
      return '{}';
    }
    var arrayStr = [];
    
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        arrayStr.push(stringifyJSON(key) + ':' + (stringifyJSON(obj[key])));
      }
    }
    
    return '{' + arrayStr.join() + '}';
   }
   
};





















