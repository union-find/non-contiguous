import { RankedTreeNode , rankedtreeunion , rankedtreemakeset } from '../fundamentals/index.js'

export const Node = RankedTreeNode ;

export const union = rankedtreeunion ;

export function find ( node ) {

	if ( node !== node.parent ) {
		node.parent = find( node.parent ) ;
	}

	return node.parent ;

}

export const makeset = rankedtreemakeset ;

export default {
	Node,
	union,
	find,
	makeset
} ;
