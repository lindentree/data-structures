//what is tree?
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  newTree.node = null
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.node = Tree(value);
  this.children.push(this.node);
  
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
