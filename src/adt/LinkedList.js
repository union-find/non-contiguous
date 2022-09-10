import { LinkedListNode , linkedlistmakeset } from '../fundamentals/index.js'

export const Node = LinkedListNode ;

export function union ( a , b ) {

	a.back.next = b ;
	a.back = b.back ;
	return a ;

}

export function find ( node ) {

	while ( node.next !== null ) {
		node = node.next ;
	}

	return node ;

}

export const makeset = linkedlistmakeset ;

export default {
	Node,
	union,
	find,
	makeset
} ;
