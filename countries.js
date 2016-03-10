var Hamburger = function (size, stuffing) {
    var calories = 0;
    var cost = 0;
    var toppings = [];
    
    var entitiesSize = {
	SIZE_SMALL: {
	    cost: 50,
	    calories: 20
	},
	SIZE_BIG: {
	    cost: 100,
	    calories: 40
	}
    };
    
    var entitiesStuffing = {
	STUFFING_CHEESE: {
	    cost: 10,
	    calories: 20
	},
	STUFFING_SALAD: {
	    cost: 20,
	    calories: 5
	},
	STUFFING_POTATO: {
	    cost: 15,
	    calories: 10
	}
    };

    var entitiesTopping = {
	TOPPING_MAYO: {
	    cost: 20,
	    calories: 5
	},
	TOPPING_SEASONING: {
	    cost: 15,
	    calories: 0
	}
    }



    
    switch(true) {
	
    case arguments.length < 1:
	throw new Error('HamburgerException: no size given');
	break;

    case arguments.length < 2:
	throw new Error('HamburgerException: no stuffing given');
	break;
	
    case !entitiesSize.hasOwnProperty(size):
	throw new Error('HamburgerException: invalid size ' + size);
	break;
	
    case !entitiesStuffing.hasOwnProperty(stuffing):	
	throw new Error('HamburgerExceptio: invalid stuffing ' + stuffing);
	break;
	
    }
    


    
    calories += entitiesSize[size].calories + 
	entitiesStuffing[stuffing].calories;

    cost += entitiesSize[size].cost + 
	entitiesStuffing[stuffing].cost;

    

    this.calculateCalories = function () {
	return calories;
    }

    this.calculateCost = function () {
	return cost;
    }

    this.addTopping = function (topping) {
	switch (true) {
	    
	case !topping:
	    throw new Error('HamburgerException: no arguments');
	    break;
	    
	case (toppings.length > 2):
	    throw new Error('HamburgerException: too many toppings');
	    break;
	    
	case (toppings.indexOf(topping) > -1):
	    throw new Error('HamburgerException: duplicate ' + topping);
	    break;
	    
	}
	
	toppings.push(topping);
	
	calories += entitiesTopping[topping].calories;
	cost += entitiesTopping[topping].cost;
    }    
}
	
    
