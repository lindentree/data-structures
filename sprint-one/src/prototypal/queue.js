var Queue = function() {

var obj = Object.create(queueMethods);

return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {

	 lowest:0,

  position: 0,

  size: function() {
    var size = this.position - this.lowest
  	if (size < 1) {
  		return 0;
  	}
  	
  	return size;
  },
  enqueue: function (value) {
  	var key = this.position
  	
  	this[key] = value;
  
    this.position++;
  },
  dequeue: function (value) {
  	console.log(this)
  	var idx = this.lowest 

  	var x = idx.toString();
  	
  	var popped = this[x];
  	//console.log(popped)
  	delete this[x];
  	this.lowest++;
  	//this.size--;
  	return popped;
  	
  },

};


