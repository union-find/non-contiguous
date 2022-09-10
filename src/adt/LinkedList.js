export const union = (a, b) => {
	a.back.next = b;
	a.back = b.back;
	return a;
};

export const find = (node) => {
	while (node.next !== null) {
		node = node.next;
	}

	return node;
};

export {
	LinkedListNode as Node,
	linkedlistmakeset as makeset,
} from '../fundamentals/index.js';
