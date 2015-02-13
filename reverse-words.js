

function reverseWords(inputString){
	var word = [];
	var ret = '';
	var i;
	for(i=0; i<inputString.length; i++){
		var c = inputString.charAt(i);
		if(c === ' '){
			ret = ret + popWordFromStack(word) + c;
		}
		else{
			word.push(c);
		}
	}
	ret = ret + popWordFromStack(word);
	return ret;
}

function popWordFromStack(stack){
	var ret = ''
	while(stack.length>0){
		ret+=stack.pop();
	}
	return ret;
}


//test
var input = "this is a test of the function";
var expected = "siht si a tset fo eht noitcnuf";
var assert = require('assert');
assert.equal(expected,reverseWords(input));
console.log('Test Passed!')