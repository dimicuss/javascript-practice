'use strict';

let deepCopy = obj => {
    
    let getType = obj => {
	let toString = Object.prototype.toString;
	let type = toString.call(obj);
	type = type.slice( 8, type.length - 1 ).toLowerCase();

	return type;
    }

    
    let _unshift = ( lst, elm ) => {
	lst.unshift(elm);
	return lst;
    }
	
    
    let copyArray = lst => {
	switch (true) {
	  case (lst.length == 0 ): return [];
	  case (typeof lst != 'object'): return lst;
	}
	
	return _unshift(  copyArray( lst.slice(1) ), startCopy( lst[0] )  );
    }

    
    let copyObject = obj => {
	let copy = {};
	
	for(let key in obj)
	    if( obj.hasOwnProperty(key) ) {
		if(typeof obj[key] == 'obj')
		    copy[key] = startCopy( obj[key] );
		else  copy[key] = obj[key];
	    }
	
	return copy;
    }

    
    let startCopy = obj => {
	switch( getType(obj) ) {  
	  case 'array':
	      return copyArray(obj);
	  case 'object':
	      return copyObject(obj);
	  case 'date':
	      return new Date( obj.getTime() );
	
	  default: return obj;	
	}    
    }

    return startCopy(obj);
}


let superObj = {
    sd1: 1,
    sd2: 2,
    sd3: 3,
    sd5: {
	sd6: [ 1, 2, 3, 4, 5, {
	    sd7: 7
	}],
	sd8: new Date()
    }
}

setTimeout( function () {
    console.log(new Date());
    console.log(deepCopy(superObj));
} , 4000);


