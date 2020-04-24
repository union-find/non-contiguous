# Examples
```js
// can choose between 8 different implementations
//   - ForestAmortizedHalving
//   - ForestAmortizedRecursive
//   - ForestAmortizedSplitting
//   - ForestAmortizedTwoPasses
//   - Forest
//   - LinkedList
//   - LinkedListWithHeadAndLength
//   - LinkedListWithHead

let { makeset , union , find } = disjointset.ForestAmortizedHalving ;

let a , b , c , A , B , C ;

A = a = makeset( ) ;
B = b = makeset( ) ;
C = c = makeset( ) ;

find( a ) === find( a ) ; // true
find( a ) === find( b ) ; // false
find( a ) === find( c ) ; // false

find( b ) === find( a ) ; // false
find( b ) === find( b ) ; // true
find( b ) === find( c ) ; // false

find( c ) === find( a ) ; // false
find( c ) === find( b ) ; // false
find( c ) === find( c ) ; // true

A = union( A , B ) ; // union( B , A ) would work too

find( a ) === find( a ) ; // true
find( a ) === find( b ) ; // true
find( a ) === find( c ) ; // false

find( b ) === find( a ) ; // true
find( b ) === find( b ) ; // true
find( b ) === find( c ) ; // false

find( c ) === find( a ) ; // false
find( c ) === find( b ) ; // false
find( c ) === find( c ) ; // true
```
