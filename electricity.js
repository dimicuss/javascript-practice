'use strict';

(function () {
    let randomInteger = function (min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
    }

    
    let listOf = function (obj, n) {
	let list = [];
	let keys = [];
	let args = [];
	let fn;
	
	for(let key in obj)
 	    if (obj.hasOwnProperty(key))
		keys.push(key);
	
	fn = obj[keys[0]];
	 
	for(let i = 1; i < keys.length; i++)
	    args.push(obj[keys[i]]);
	
	for(let i = 0; i < n; i++)
	    list.push(fn.apply(null, args));
	
	return list;
     }
    
    
    //-----------------------------------------------------------------------------------

    
    let Station = function () {
	return {
	    type: 'Station',
	    power: 100,//randomInteger(1, 100),
	    getPower: function () {
		return this.power;
	    }
	}
    }
    
    
    let SolarAccumulator = function (dayTime) {
	return {
	    type: 'SolarAccumulator',
	    power: 5,//(dayTime == 'day') ? randomInteger(1, 5) : 0,
	    getPower: function () {
		return this.power;
	    }
	}
    }
    
    
    let House = function (dayTime) {
	return {
	    type: 'House',
	    consumption: (dayTime == 'day') ? 4/1000 : 1/1000,
	    apartmentCount: 300,//randomInteger(1, 400),
	    getConsum: function () {
		return this.consumption * this.apartmentCount;
	    },
	    getApartCount: function () {
		return this.apartmentCount;
	    }
	}
    }
    
    
    let Line = function () {
	return {
	    type: 'Line',
	    power: 100,//randomInteger(1, 300),
	    cost: 4,//randomInteger(1, 50),
	    getPower: function () {
		return this.power;
	    },
	    getCost: function () {
		return this.cost * this.power;
	    },
	    getCostPerWatt: function () {
		return this.cost;
	    }
	}
    }


   
    let City = function (dayTime) {
	if(dayTime == undefined)
	    throw new Error('CityException: no arguments passed');
	
	let stationList = listOf({
	    cls: Station,
	}, 1);

	let solarAccList = listOf({
	    cls: SolarAccumulator,
	    dayTime: dayTime
	}, 5);

	let houseList = listOf({
	    cls: House,
	    dayTime: dayTime
	}, 1000);

	let linesList = listOf({
	    cls: Line,
	}, 1000);

	
	return {
	    getStationList: function () {
		return stationList;
	    },
	    getSolarAccList: function () {
		return solarAccList;
	    },
	    getHouseList: function () {
		return houseList;
	    },
	    getLinesList: function () {
		return linesList;
	    },
	    countEffiency: function () {
		let output = {
		    state: 'sufficiency'
		}
		    
		let production = stationList.reduce((acc, elm) => acc + elm.getPower(), 0) +
		                solarAccList.reduce((acc, elm) => acc + elm.getPower(), 0);
		let consumption = houseList.reduce((acc, elm) => acc + elm.getConsum(), 0);

		let difference = production - consumption;

		
		if (difference < 0) {
		    output.state = 'lack';
		    difference = Math.abs(difference);
		}

		
		let linesPower = 0;
		let linesCost = 0;
		let lineNum = 0;
		
		while(linesPower < difference) {
		    linesPower += linesList[lineNum].getPower();
		    linesCost += linesList[lineNum].getCost();
		    lineNum++;
		}
		
		linesCost -= (linesPower - difference) * linesList[lineNum].getCostPerWatt();


		output.power = difference;
		output.cost = linesCost;
		
		return output;
	    }
	}   
    }

    
    let city = City('day');
    let effiency = city.countEffiency();
    console.log(effiency.state + '\ncost: ' + effiency.cost + '\npower: ' + effiency.power );
    
})();
    




