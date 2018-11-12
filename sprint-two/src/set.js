var Set = function() {
  
  this._storage = []; // fix me
  
};

Set.prototype.add = function(item) {
   if (!(this.contains(item))) {
     this._storage.push(item);
   }

};

Set.prototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
  	if (this._storage[i] === item) {
  	  return true;
  	}
  }

  return false;
};

Set.prototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
  	if (this._storage[i] === item) {
  	  this._storage.splice(i, 1);
  	}
  }

  return item;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
