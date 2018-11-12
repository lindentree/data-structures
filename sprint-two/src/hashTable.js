

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._oldHash = null;
  this._oldKey = null;
  this._array = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var test = this._array;
  var retrieved = this._storage.get(index);
  if (retrieved !== undefined && retrieved.length > 0) {
    for (var i = 0; i < retrieved.length; i++) {
      if (retrieved[i][0] !== k) {
        var tuple = [k, v];
        test.push(tuple);
      } else {
          retrieved[i][1] = v;
      }
    }
  } else {
      var tuple = [k, v];
      test.push(tuple);
      this._storage.set(index,test);
    }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var retrieved = this._storage.get(index);

  for (var i = 0; i < retrieved.length; i++) {
    if (retrieved[i][0] === k) {
      return retrieved[i][1];
    } else {
        continue;
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removeTarget = this._storage.get(index);
  for (var i = 0; i < removeTarget.length; i++) {
    if (removeTarget[i][0] === k) {
      removeTarget.splice(i,1)
    } else {
      continue;
    }
  }
    
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


