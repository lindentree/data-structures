var Queue = function() {
  var someInstance = {};

  _.extend(someInstance, queueMethods);
	
	return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  lowest:0,

  position: 0,

  size: function() {
  	if (this.position < 0) {
  		return 0;
  	}
  	
  	return Object.keys(this).length -5;
  },
  enqueue: function (value) {
  	var key = this.position
  	
  	this[key] = value;
  
    this.position++;
  },
  dequeue: function (value) {
  	console.log(this)
  	var idx = this.lowest 

  	console.log(idx)
  	var x = idx.toString();
  	
  	var popped = this[x];
  	//console.log(popped)
  	delete this[x];
  	this.lowest++;
  	//this.size--;
  	return popped;
  	
  },



};


