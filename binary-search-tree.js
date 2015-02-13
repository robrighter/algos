

function BSR(){

	var root = null;

	this.makeNode = function(value, left, right){
		return {
			value: value,
			left: left ? left : false,
			right: right ? right : false
		};
	}

	this.printTree = function(){
		console.log(root);
	}

	this.insert = function(value){
		if(root === null){
			root = this.insertItem(value, false); 
		}
		else{
			this.insertItem(value, root);
		}
	}

	this.insertItem = function(value, tree){
		if(!tree){
			tree = this.makeNode(value);
		}
		else{
			if(value < tree.value){
				tree.left = this.insertItem(value, tree.left);
			}
			else{
				tree.right = this.insertItem(value, tree.right);
			}
		}
		return tree;
	}

	this.traverseLeft = function(){
		return this.tLeft(root);
	}

	this.tLeft = function(tree){
		var result = [];
		if(tree.left){
			result = result.concat(this.tLeft(tree.left));
		}
		result = result.concat([tree.value]);
		if(tree.right){
			result = result.concat(this.tLeft(tree.right));
		}
		return result;
	}

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










