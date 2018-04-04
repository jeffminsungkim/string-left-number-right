'use strict';
module.exports = n => {
	const format = /^([a-zA-Z]+\d)\d*$/;

	if (Object.prototype.toString.call(n) === '[object String]') {
		return format.test(n);
	}
};
