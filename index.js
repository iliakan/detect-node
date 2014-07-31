module.exports = Object.prototype.toString.call( (global || window).process ) === '[object process]' ? true : false;
