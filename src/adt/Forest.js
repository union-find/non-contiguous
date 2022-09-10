import {_makeset} from '../fundamentals/index.js';

export function Node(value) {
	this.parent = this;
	this.value = value;
}

export const union = (a, b) => {
	find(b).parent = find(a);

	return a;
};

export const find = (node) => {
	while (node !== node.parent) {
		node = node.parent;
	}

	return node;
};

export const makeset = _makeset(Node);
