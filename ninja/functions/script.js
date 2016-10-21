'use strict';

(function () {
    var results
    
    window.assert = function (value, desc) {
	let li       = document.createElement( 'li' )
	let textNode = document.createTextNode( desc )
	    
	li.className = value ? "pass" : "fail"
	li.appendChild( textNode )
	results.appendChild( li )

	if(!value) {
	    li.parentNode.parentNode.className = "fail"
	}
	return li
    }
    
    window.test = function (name, fn) {
	results = document.querySelector('#results')
	results = assert(true, name).appendChild(
	    document.createElement('ul'))
	fn()
    }
})()


window.onload = function () {
    
    test('Function test', () => {
	function isNimble () { return true; }                         //#1

	
	assert(typeof isNimble === "function",                        //#2
	       "isNimble() defined");
	
	assert(isNimble.name === "isNimble",
	       "isNimble() has a name");
	
	
	var canFly = function () { return true; };                    //#3
	
	assert(typeof canFly === "function",                          //#4
	       "canFly() defined");
	
	assert(canFly.name === "canFly",
	       "canFly() has name");
	
	
	window.isDeadly = function () { return true; };                //#5
	
	assert(typeof window.isDeadly === "function",                  //#6
	       "isDeadly() defined");

	
	function outer () {                                            //#7
	    assert(typeof inner === "function",
		   "inner() in scope before declaration");
	    function inner () {}
	    
	    assert(typeof inner === "function",
		   "inner() in scope after declaration");
	    assert(window.inner === undefined,
		   "inner() not in global scope");
	}

	
	assert( typeof function () {} === 'function',
	      "anonymous function defined")
	
	outer();                                                       //#8
	assert(window.inner === undefined,
	       "inner() still not in global scope");
	
	window.wieldsSword = function swingsSword() { return true; };  //#9
	
	assert(window.wieldsSword.name === 'swingsSword',
	       "wieldSword's real name is swingsSword");
    })
    
}
