import { RankedTreeNode , rankedtreeunion , rankedtreemakeset } from '../fundamentals/index.js'

export const Node = RankedTreeNode ;

export const union = rankedtreeunion ;

export function find ( node ) {

	let parent ;

	for ( parent = node.parent ; parent.parent !== parent ; parent = node.parent ) {

		node.parent = parent.parent ;
		node = node.parent ;

	}

	return parent ;

}

export const makeset = rankedtreemakeset ;

export default {
	Node,
	union,
	find,
	makeset
} ;
