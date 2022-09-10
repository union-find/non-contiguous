export const find = (node) => {
	let parent;

	for (parent = node.parent; parent.parent !== parent; parent = node.parent) {
		node.parent = parent.parent;
		node = parent;
	}

	return parent;
};

export {
	RankedTreeNode as Node,
	rankedtreeunion as union,
	rankedtreemakeset as makeset,
} from '../fundamentals/index.js';
