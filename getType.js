"use strict";

(function () {
    let getType = (obj) => {
	let toString = Object.prototype.toString;
	let type = toString.call(obj);
	type = type.slice( 8, type.indexOf(']') ).toLowerCase();

	if (type == 'arguments' || type == 'htmlcollection')
	    return 'array-like';

	else return type;
    }
    
    console.log( (() => getType(null)).apply(null) );
    
})();


	
	
