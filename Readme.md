Usage:
```js
var isNode = require('detect-node');

if (isNode) {
  console.log("Running under Node.JS");
} else {
  alert("Hello from browser (or whatever not-a-node env)");
}
```

The check is performed as:
```js
module.exports = 
  Object.prototype.toString.call( (global || window).process ) === '[object process]' ? 
  true : false;

```

Thanks to Ingvar Stepanyan for the initial idea. This check is both **the most reliable I could find** and it does not use `process` env directly, which causes browserify to include it into the build.
