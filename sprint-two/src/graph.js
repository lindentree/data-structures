

// Instantiate a new graph
var Graph = function() {

	this.nodes = [];
	this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
   this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var i = 0; i < this.nodes.length; i++) {
  	if (this.nodes[i] === node) {
  		return true;
  	}
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0; i < this.nodes.length; i++) {
  	if (this.nodes[i] === node) {
  		this.nodes.splice(i, 1);
  	}
  }

  for(var i = 0; i < this.edges.length; i++) {
	  var fx = this.edges[i][0]
	  var tx = this.edges[i][1]
  	  if (fx === node || tx === node)  {
  		this.edges.splice(i, 1);
  	}
  }

  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i = 0; i < this.edges.length; i++) {
	  var fx = this.edges[i][0]
	  var tx = this.edges[i][1]
  	  if ((fx === fromNode || tx === fromNode) && (fx === toNode || tx === toNode))  {
  		return true;
  	  }
    }

  return false;
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var vertex = [fromNode, toNode];
  this.edges.push(vertex);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	for(var i = 0; i < this.edges.length; i++) {
	  var fx = this.edges[i][0]
	  var tx = this.edges[i][1]
  	  if ((fx === fromNode || tx === fromNode) && (fx === toNode || tx === toNode))  {
  		this.edges.splice(i, 1);
  	  }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i = 0; i < this.nodes.length; i++) {
  	cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


