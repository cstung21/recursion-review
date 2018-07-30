// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var body = document.body;
  var elementsWithClass = [];
  
  var searchNodes = function(targetNode) {
    if (targetNode.classList && targetNode.classList.contains(className)) {
      elementsWithClass.push(targetNode);
    }
        
    if (targetNode.hasChildNodes()) {
      var children = targetNode.childNodes;
      for (var i = 0; i < children.length; i++) {
        searchNodes(children[i]);
      }
    }
  }
  
  searchNodes(body);
  return elementsWithClass;
};