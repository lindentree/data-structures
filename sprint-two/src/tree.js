//what is tree?
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  const node = Tree(value);
  
  this.children.push(node);
  console.log(this)
  
};

treeMethods.contains = function(target) {
//console.log(this.value)
  
  for (var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target) {
      return true;
    }

    if (this.children[i].contains(target)) {
      return true;
    } 

  } 

 return false;
  
 
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
