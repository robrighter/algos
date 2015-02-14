
function makeRandomInteger(max){
	return Math.floor(Math.random()*max);
}

function swapIndexValues(arr, index1, index2){
	var valueForIndex1 = arr[index2];
	var valueForIndex2 = arr[index1];
	arr[index1] = valueForIndex1;
	arr[index2] = valueForIndex2;
	return arr;
}

function shuffle(inArr, rand){
	var i;
	for(i=0; i<inArr.length; i++){
		var toSwap = inArr.length-1-rand(inArr.length-1-i);
		inArr = swapIndexValues(inArr, i, toSwap);
	}
	return inArr;
}


//tests
var assert = require('assert');
var testArr = [0,1,2,3,4,5,6,7,8,9];
var actual = shuffle(testArr, makeRandomInteger);


//first test that all the numbers are present
testArr.forEach(function(item){
	assert(actual.indexOf(item)>-1);
});
console.log('Passed all values present test.');

//next test result logic works with deterministic random logic generator
function mockRandomInteger(max){
	return max>0 ? max-1 : 0;
}
var testArr = [0,1,2,3,4,5,6,7,8,9];
var expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]; //shifted by 1
var actual = shuffle(testArr, mockRandomInteger);
assert.deepEqual(expected, actual);
console.log("Passed logic test");

