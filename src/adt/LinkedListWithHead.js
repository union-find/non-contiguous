export const union = (a, b) => {
	a.back.next = b;
	a.back = b.back;

	for (let it = a.next; it !== b; it = it.next) {
		it.back = b.back;
	}

	return a;
};

export {
	LinkedListNode as Node,
	linkedlistbackfind as find,
	linkedlistmakeset as makeset,
} from '../fundamentals/index.js';
