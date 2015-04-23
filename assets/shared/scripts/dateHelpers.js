"use strict";

module.exports = {
	days: ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'],

    getDayName: function(i) {
    	let today = new Date();
    	let dayNum = today.getDay() + i;
    	dayNum > 7 ? dayNum = dayNum - 7 : dayNum = dayNum;
        return this.days[dayNum - 1];
    }
}