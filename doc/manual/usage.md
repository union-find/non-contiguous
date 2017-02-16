The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const disjointset = require( '@aureooms/js-disjoint-set' ) ;
// or
import disjointset from '@aureooms/js-disjoint-set' ;
```
