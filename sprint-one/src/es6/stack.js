class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.position = 0;
  }

  size() {
  	if (this.position < 0) {
  		return 0;
  	}
  	return this.position;
  };
  
  push(value) {
  	var key = this.position
  	
  	this[key] = value;
  
    this.position++;
  };
  
  pop(value) {
  	var key = this.position - 1
  	var x = key.toString();
  	console.log(this)
  	var popped = this[x];
  	delete this[x];
  	this.position--;
  	return popped;
  	
  }

}