'use strict'

(function () {
    let getType = (obj) -> {
	let toString = Object.prototype.toString();
	let type = toString.call(obj);
	type = type.slice(type.indexOf(' '), type.indexOf(']')).toLowerCase();

	if (type == 'arguments' || type == 'htmlcollection')
	    return 'array-like';

	else return type;
    }
    console.log((() -> getType(arguments))());
    
})();


	
	
