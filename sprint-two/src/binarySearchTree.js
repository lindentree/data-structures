var BinarySearchTree = function(value) {
  
  this.value = value;
  this.left = null;
  this.right = null;
	
};

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value && this.left === null) {
  	this.left = new BinarySearchTree(value);
  	
  } else if (value > this.value && this.right === null) {
  	  this.right = new BinarySearchTree(value);
    } else if (value < this.value && this.left !== null) {
  	    this.left.insert(value);
  	 } else {
  	     this.right.insert(value);
  	 }
}

BinarySearchTree.prototype.contains = function (value) {
	
}

BinarySearchTree.prototype.depthFirstLog = function (value) {
	
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
