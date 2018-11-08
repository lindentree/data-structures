var Stack = function() {

	var obj = Object.create(stackMethods);
	return obj
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {


	position: 0,

  size: function() {
  	if (this.position < 0) {
  		return 0;
  	}
  	return this.position;
  },
  push: function (value) {
  	var key = this.position
  	
  	this[key] = value;
  
    this.position++;
  },
  pop: function (value) {
  	var key = this.position - 1
  	var x = key.toString();
  	
  	var popped = this[x];
  	delete this[x];
  	this.position--;
  	return popped;
  	
  },
};


