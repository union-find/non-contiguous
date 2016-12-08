import { RankedTreeNode , rankedtreeunion , rankedtreemakeset } from '../fundamentals'

export const Node = RankedTreeNode ;

export const union = rankedtreeunion ;

export function find ( node ) {

	let it , parent ;

	for ( it = node ; it !== it.parent ; it = it.parent ) ;

	for ( ; node.parent !== it ; node = parent ) {

		parent = node.parent ;
		node.parent = it ;

	}

	return it ;

}

export const makeset = rankedtreemakeset ;

export default {
	Node,
	union,
	find,
	makeset
} ;
