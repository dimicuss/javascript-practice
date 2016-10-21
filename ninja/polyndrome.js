'use strict'

function polyndrome (str) {
    if(!str) {
	return false
    }

    if( str.length <= 1) {
	return true
    }

    if( str[str.length - 1] === str[0]) {
	return polyndrome(str.slice(1, str.length - 1))
    }

    return false;
}


console.log(polyndrome('sdds'));
