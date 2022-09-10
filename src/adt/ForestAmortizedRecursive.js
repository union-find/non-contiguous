export const find = (node) => {
	if (node !== node.parent) {
		node.parent = find(node.parent);
	}

	return node.parent;
};

export {
	RankedTreeNode as Node,
	rankedtreeunion as union,
	rankedtreemakeset as makeset,
} from '../fundamentals/index.js';
