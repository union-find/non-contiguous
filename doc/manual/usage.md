# Usage
The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
require( 'regenerator-runtime/runtime' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const disjointset = require( '@union-find/non-contiguous' ) ;
// or
import disjointset from '@union-find/non-contiguous' ;
```
