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
      var arrayStr = '[';
      
      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          arrayStr += (stringifyJSON(obj[i]) + ']');
        } else {
          arrayStr += (stringifyJSON(obj[i]) + ',');
        }
      }
      
      return arrayStr;
    }    
  }
  
   if (typeof obj === 'object') {
    var objStr = '{'
    var objKeys = Object.keys(obj);
    
    if (objKeys.length === 0) {
      return '{}';
    }
    
    for (var i = 0; i < objKeys.length; i++) {
      if (typeof obj[objKeys[i]] === 'function' || obj[objKeys[i]] === undefined) {
        objStr += '';
      } else if (i === objKeys.length - 1) {
        objStr += (stringifyJSON(objKeys[i]) + ':' + (stringifyJSON(obj[objKeys[i]])));
      } else {
        objStr += (stringifyJSON(objKeys[i]) + ':' + (stringifyJSON(obj[objKeys[i]]))) + ',';
      }
    }
    return objStr + '}'
   }
  
  

};
