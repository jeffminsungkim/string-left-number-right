'use strict';
module.exports = n => {
	const format = /^([a-zA-Z]+[0-9])[0-9]*$/;

	if (Object.prototype.toString.call(n) === '[object String]') {
		return format.test(n);
	}
};
