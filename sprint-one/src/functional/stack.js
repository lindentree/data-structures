var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    var x = Object.keys(storage)
    var y = x.length - 1
    var idx = x[y];
    var temp = storage[idx]; 
    delete storage[idx]; 
    key--;
    return temp;  
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
 
  return someInstance;

};
