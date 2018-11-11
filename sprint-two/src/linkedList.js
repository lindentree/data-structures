var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
<<<<<<< HEAD
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

=======
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
>>>>>>> f491df8d63b4ecdad65a259312354f2836bfd0f4
  };

  list.contains = function(target) {
    if (this.head.value === target || this.tail.value === target) {
<<<<<<< HEAD
      return true;
    } else if (this.head.next === null || this.tail.next === null){
        return false;   
    } else {
        list.contains(this.next)
    }
=======
        
      return true;
        
    } else if(this.head.next === null || this.tail.next === null) {
      
        return false
       
    } else {
        list.contains(this.next);
      } 
>>>>>>> f491df8d63b4ecdad65a259312354f2836bfd0f4

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
