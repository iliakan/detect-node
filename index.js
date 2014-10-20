module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
  module.exports = 'object' === typeof process && Object.prototype.toString.call(process) === '[object process]'
} catch(e) {}
