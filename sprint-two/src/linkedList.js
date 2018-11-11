var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode; 
  };

  list.removeHead = function() {

    var formerVal = this.head.value;
    list.head = list.tail;
    return formerVal;

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  this.value = value;
  this.next = null;

  //return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
