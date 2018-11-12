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
  var resultVar = false
  if (this.value === value) {
  	resultVar = true;
  } else if (value < this.value && this.left !== null) {
  	  return this.left.contains(value);
    } else if (value > this.value && this.right !== null) {
        return this.right.contains(value);
    } 
  
  return resultVar;
	
}

BinarySearchTree.prototype.depthFirstLog = function (callback) {
 
  callback(this.value)

  if (this.left === null && this.right === null) {
    return;
  } 

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  } 
	
	
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
