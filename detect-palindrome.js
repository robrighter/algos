


function isStringPalindrome(inputString){
	var i;
	for(i=0; i<(inputString.length/2); i++){
		if(inputString.charAt(i) !== inputString.charAt(inputString.length-1-i)){
			return false;
		}
	}
	return true;
}


var assert = require('assert');
var str = "bb";
assert(isStringPalindrome(str));

var str = "bob";
assert(isStringPalindrome(str));

var str = "abba";
assert(isStringPalindrome(str));

var str = "bba";
assert(!isStringPalindrome(str));


var str = "bbabb";
assert(isStringPalindrome(str));

var str = "bbnonanonbb";
assert(isStringPalindrome(str));

var str = "this is not a palindrome";
assert(!isStringPalindrome(str));

console.log('All tests Passed!!!');
