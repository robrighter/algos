


function charsInBothStrings(s1, s2){
	var ret = [];
	var s1Hash = {};
	for(var i=0; i<s1.length; i++){
		s1Hash[s1.charAt(i)] = true;
	}

	for(var i=0; i<s2.length; i++){
		if(s1Hash.hasOwnProperty(s2.charAt(i))){
			ret.push(s2.charAt(i));
		}
	}
	return ret;
}


var assert = require('assert');

var expected = ['a','b','c'];
var actual = charsInBothStrings("abcdef","qrsabcs");
assert.deepEqual(expected.sort(), actual.sort());

var expected = ['i','r','l'];
var actual = charsInBothStrings("abcdr9l2ief","nnnnnnnnnnnnr nnnnnnnn i    l");
assert.deepEqual(expected.sort(), actual.sort());



console.log('All tests passed!');