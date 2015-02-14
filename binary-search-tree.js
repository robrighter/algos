

function BSR(){
	this.root = null;
}

BSR.prototype.makeNode = function(value, left, right){
	return {
		value: value,
		left: left ? left : false,
		right: right ? right : false
	};
}

BSR.prototype.printTree = function(){
	console.log(this.root);
}

BSR.prototype.insert = function(value){
	this.root = this._insert(value,this.root);
}

BSR.prototype._insert = function(value, tree){
	if(!tree){
		tree = this.makeNode(value);
	}
	else{
		if(value < tree.value){
			tree.left = this._insert(value, tree.left);
		}
		else{
			tree.right = this._insert(value, tree.right);
		}
	}
	return tree;
}

BSR.prototype.traverseLeft = function(tree){
	if(!tree){
		tree = this.root;
	}
	var result = [];
	if(tree.left){
		result = result.concat(this.traverseLeft(tree.left));
	}
	result = result.concat([tree.value]);
	if(tree.right){
		result = result.concat(this.traverseLeft(tree.right));
	}
	return result;
}


//Test it
var assert = require('assert');
var subject = new BSR();
var expected = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
subject.insert(5);
subject.insert(3);
subject.insert(1);
subject.insert(4);
subject.insert(8);
subject.insert(2);
subject.insert(7);
subject.insert(9);
subject.insert(6);
subject.insert(0);
subject.insert(11);
subject.insert(15);
subject.insert(12);
subject.insert(14);
subject.insert(13);
subject.insert(10);
assert.deepEqual(expected, subject.traverseLeft());


console.log('All Tests Passed');










