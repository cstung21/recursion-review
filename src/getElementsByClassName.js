// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // var body = document.body;
  var elementsWithClass = [];
  
  var searchNodes = function(targetNode) {
    // console.log(targetNode);
    
    if (targetNode.classList && targetNode.classList.contains(className)) {
      elementsWithClass.push(targetNode);
    }
    
    console.log(elementsWithClass);
    
    if (targetNode.hasChildNodes()) {
      var children = targetNode.childNodes;
      for (var i = 0; i < children.length - 1; i ++) {
        searchNodes(children[i]);
      }
    }
  }
  
  searchNodes(document.body);
  
  return elementsWithClass;
};

// console.log(getElementsByClassName('targetClassName'));