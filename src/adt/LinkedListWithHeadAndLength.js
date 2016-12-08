import { linkedlistbackfind , _makeset } from '../fundamentals'

export function Node ( value ) {
	this.length = 1 ;
	this.back = this ;
	this.next = null ;
	this.value = value ;
}

export function union ( a , b ) {

	if ( a.length < b.length ) {
		let it =  a ;
		a  =  b ;
		b  = it ;
	}

	a.back.next = b ;
	a.back = b.back ;

	for ( let it = a.next ; it !== b ; it = it.next ) {
		it.back = b.back ;
	}

	a.length += b.length ;

	return a ;

}

export const find = linkedlistbackfind ;

export const makeset = _makeset( Node ) ;

export default {
	Node,
	union,
	find,
	makeset
} ;
