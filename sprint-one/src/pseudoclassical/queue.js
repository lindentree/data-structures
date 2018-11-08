var Queue = function() {

  this.lowest = 0;
  this.position = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Queue.prototype.size = function() {
    var size = this.position - this.lowest
  	if (size < 1) {
  		return 0;
  	}
  	
  	return size;
 };
  Queue.prototype.enqueue = function (value) {
  	var key = this.position
  	
  	this[key] = value;
  
    this.position++;
  };
  Queue.prototype.dequeue = function (value) {
  	var idx = this.lowest 

  	var x = idx.toString();
  	
  	var popped = this[x];
  	//console.log(popped)
  	delete this[x];
  	this.lowest++;
  	//this.size--;
  	return popped;
  	
  };
var someInstance = new Queue;
