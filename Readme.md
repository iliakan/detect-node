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
module.exports = (typeof process === 'object') && 
  Object.prototype.toString.call(process) === '[object process]' ? 
  true : false;
```

Thanks to **Ingvar Stepanyan** for the idea, it's the most reliable way to detect Node.JS I could find.
