import { LinkedListNode , linkedlistbackfind , linkedlistmakeset } from '../fundamentals'

export const Node = LinkedListNode ;

export function union ( a , b ) {

	a.back.next = b ;
	a.back = b.back ;

	for ( let it = a.next ; it !== b ; it = it.next ) {
		it.back = b.back ;
	}

	return a ;

}

export const find = linkedlistbackfind ;

export const makeset = linkedlistmakeset ;

export default {
	Node,
	union,
	find,
	makeset
} ;
