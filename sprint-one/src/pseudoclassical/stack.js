var Stack = function() {

  this.position = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.size= function() {
  	if (this.position < 0) {
  		return 0;
  	}
  	return this.position;
  };
  Stack.prototype.push= function (value) {
  	var key = this.position
  	
  	this[key] = value;
  
    this.position++;
  };
  Stack.prototype.pop = function (value) {
  	var key = this.position - 1
  	var x = key.toString();
  	console.log(this)
  	var popped = this[x];
  	delete this[x];
  	this.position--;
  	return popped;
  	
  }

  var someInstance = new Stack;