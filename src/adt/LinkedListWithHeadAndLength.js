import {_makeset} from '../fundamentals/index.js';

export function Node(value) {
	this.length = 1;
	this.back = this;
	this.next = null;
	this.value = value;
}

export const union = (a, b) => {
	if (a.length < b.length) {
		const it = a;
		a = b;
		b = it;
	}

	a.back.next = b;
	a.back = b.back;

	for (let it = a.next; it !== b; it = it.next) {
		it.back = b.back;
	}

	a.length += b.length;

	return a;
};

export const makeset = _makeset(Node);
export {linkedlistbackfind as find} from '../fundamentals/index.js';
