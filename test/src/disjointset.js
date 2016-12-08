import test from 'ava' ;

import {
	LinkedList ,
	LinkedListWithHead ,
	LinkedListWithHeadAndLength ,
	Forest ,
	ForestAmortizedRecursive ,
	ForestAmortizedTwoPasses ,
	ForestAmortizedSplitting ,
	ForestAmortizedHalving ,
	_prototype ,
} from '../../src' ;

function macro ( t , Node , makeset , union , find ) {

	let a , b , c , d , e , A , B , C , D , E ;

	const l = ( x , y ) => t.ok( find( x ) === find( y ) ) ;

	const o = ( x , y ) => t.ok( find( x ) !== find( y ) ) ;

	// 1st scenario

	A = a = makeset( 0 ) ;
	B = b = makeset( 1 ) ;
	C = c = makeset( 2 ) ;
	D = d = makeset( 3 ) ;
	E = e = makeset( 4 ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( A , E ) ;
	delete E ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = union( D , B ) ;
	delete D ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( C , A ) ;
	delete C ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( B , A ) ;
	delete B ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

	// 2nd scenario

	A = a = makeset( 0 ) ;
	B = b = makeset( 1 ) ;
	C = c = makeset( 2 ) ;
	D = d = makeset( 3 ) ;
	E = e = makeset( 4 ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( A , E ) ;
	delete E ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = union( D , B ) ;
	delete D ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( A , C ) ;
	delete C ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( B , A ) ;
	delete B ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

}

for ( const [ name , Set ] of [
	[ 'LinkedList' , LinkedList ] ,
	[ 'LinkedListWithHead' , LinkedListWithHead ] ,
	[ 'LinkedListWithHeadAndLength' , LinkedListWithHeadAndLength ] ,
	[ 'Forest' , Forest ] ,
	[ 'ForestAmortizedRecursive' , ForestAmortizedRecursive ] ,
	[ 'ForestAmortizedTwoPasses' , ForestAmortizedTwoPasses ] ,
	[ 'ForestAmortizedSplitting' , ForestAmortizedSplitting ] ,
	[ 'ForestAmortizedHalving' , ForestAmortizedHalving ] ,
] ) {

	// functional

	test( name , macro , Set.Node , Set.makeset , Set.union , Set.find ) ;

	// prototypal

	const Node = function ( value ) { Set.Node.call( this , value ) ; } ;

	_prototype( Node , Set.union , Set.find ) ;

	const makeset = _makeset( Node ) ;

	const union = ( a , b ) => return a.union( b ) ;

	const find = node => return node.find( ) ;

	test( name + ' (prototype)' , macro , Node , makeset , union , find ) ;

}
