var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var lowest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++
  };

  someInstance.dequeue = function() {
    if (count - lowest === 0) {
      return undefined;
    }
     var result = storage[lowest]
     delete storage[lowest];
     lowest ++;
     return result;
   
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
