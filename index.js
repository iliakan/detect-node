// Only the browser has a global `window` object. This check is resistant
// to any known trick, including a `var window = this` or `this.window = this`
// in the global scope.
var isBrowser = new Function(
  "try { return this === window; } catch (e) { return false; }"
);

module.exports = !isBrowser();
