var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

      if(this.tail) {
        this.tail.next = newNode
      } else {
        this.head = newNode
      }

    this.tail = newNode;
  };

  list.removeHead = function() {
    var formerValue = list.head.value;
    list.head = list.tail;
    return formerValue;
  };

  list.contains = function(target) {
    if (this.head.value === target || this.tail.value === target) {
        
      return true;
        
    } else if(this.head.next === null || this.tail.next === null) {
      
        return false
       
    } else {
        list.contains(this.next);
      } 

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
