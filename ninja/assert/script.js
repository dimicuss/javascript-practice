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
    test('A test.', function () {
	assert(true,  "First assertion Complited")
	assert(false, "Second assertion Complited")
	assert(true,  "Third assertion Complited")
    })
    test('B test.', function () {
	assert(true,  "First assertion Complited")
	assert(false, "Second assertion Complited")
	assert(true,  "Third assertion Complited")
    })
    test('C test.', function () {
	assert(true, "First assertion Complited")
	assert(true, "Second assertion Complited")
	assert(true, "Third assertion Complited")
    })
}
