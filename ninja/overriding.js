const assert = require('assert')



Object.prototype.addMethod = function (method, current) {
    let old = this[method]
    
    if(old) {
	this[method] = function (...rest) {
	    if(current.length === rest.length) {
		return current.apply(null, rest)
	    }
	    else {
		return old.apply(null, rest)
	    }
	}
    }
    else {
	this[method] = function (...rest) {
	    if(current.length == rest.length) {
		return current.apply(null, rest)
	    }
	    else {
		throw new Error('There is no such function')
	    }
	}
    }
}



let testObj = {}

testObj.addMethod('testMethod', function (a, b, c) {
    return arguments
})

testObj.addMethod('testMethod', function (a, b) {
    return arguments
})

testObj.addMethod('testMethod', function (a) {
    return arguments
})


assert(testObj.testMethod(1).length === 1, 'Test 1')

assert(testObj.testMethod(1, 2).length === 2, 'Test 2')

assert(testObj.testMethod(1, 2, 3).length === 3, 'Test 3')

try {
    testObj.testMethod(1, 2, 3, 4)
}
catch (err) {
    assert(err.message === 'There is no such function' , 'Test 4')
}




