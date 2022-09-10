export const find = (node) => {
	let it;
	let parent;

	for (it = node; it !== it.parent; it = it.parent);

	for (; node.parent !== it; node = parent) {
		parent = node.parent;
		node.parent = it;
	}

	return it;
};

export {
	RankedTreeNode as Node,
	rankedtreeunion as union,
	rankedtreemakeset as makeset,
} from '../fundamentals/index.js';
