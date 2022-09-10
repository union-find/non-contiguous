import test from 'ava';

import {
	LinkedList,
	LinkedListWithHead,
	LinkedListWithHeadAndLength,
	Forest,
	ForestAmortizedRecursive,
	ForestAmortizedTwoPasses,
	ForestAmortizedSplitting,
	ForestAmortizedHalving,
	_prototype,
	_makeset,
} from '../../src/index.js';

function macro(t, makeset, union, find) {
	/* eslint-disable no-multi-assign */
	let a;
	let b;
	let c;
	let d;
	let e;
	let A;
	let B;
	let C;
	let D;
	let E;

	const l = (x, y) => t.true(find(x) === find(y));

	const o = (x, y) => t.true(find(x) !== find(y));

	// 1st scenario

	A = a = makeset(0);
	B = b = makeset(1);
	C = c = makeset(2);
	D = d = makeset(3);
	E = e = makeset(4);

	l(a, a);
	o(b, a);
	o(c, a);
	o(d, a);
	o(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	o(d, b);
	o(e, b);
	o(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	o(e, c);
	o(a, d);
	o(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	o(a, e);
	o(b, e);
	o(c, e);
	o(d, e);
	l(e, e);

	A = union(A, E);

	l(a, a);
	o(b, a);
	o(c, a);
	o(d, a);
	l(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	o(d, b);
	o(e, b);
	o(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	o(e, c);
	o(a, d);
	o(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	l(a, e);
	o(b, e);
	o(c, e);
	o(d, e);
	l(e, e);

	B = union(D, B);

	l(a, a);
	o(b, a);
	o(c, a);
	o(d, a);
	l(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	l(d, b);
	o(e, b);
	o(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	o(e, c);
	o(a, d);
	l(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	l(a, e);
	o(b, e);
	o(c, e);
	o(d, e);
	l(e, e);

	A = union(C, A);

	l(a, a);
	o(b, a);
	l(c, a);
	o(d, a);
	l(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	l(d, b);
	o(e, b);
	l(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	l(e, c);
	o(a, d);
	l(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	l(a, e);
	o(b, e);
	l(c, e);
	o(d, e);
	l(e, e);

	A = union(B, A);

	l(a, a);
	l(b, a);
	l(c, a);
	l(d, a);
	l(e, a);
	l(a, b);
	l(b, b);
	l(c, b);
	l(d, b);
	l(e, b);
	l(a, c);
	l(b, c);
	l(c, c);
	l(d, c);
	l(e, c);
	l(a, d);
	l(b, d);
	l(c, d);
	l(d, d);
	l(e, d);
	l(a, e);
	l(b, e);
	l(c, e);
	l(d, e);
	l(e, e);

	// 2nd scenario

	A = a = makeset(0);
	B = b = makeset(1);
	C = c = makeset(2);
	D = d = makeset(3);
	E = e = makeset(4);

	l(a, a);
	o(b, a);
	o(c, a);
	o(d, a);
	o(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	o(d, b);
	o(e, b);
	o(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	o(e, c);
	o(a, d);
	o(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	o(a, e);
	o(b, e);
	o(c, e);
	o(d, e);
	l(e, e);

	A = union(A, E);

	l(a, a);
	o(b, a);
	o(c, a);
	o(d, a);
	l(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	o(d, b);
	o(e, b);
	o(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	o(e, c);
	o(a, d);
	o(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	l(a, e);
	o(b, e);
	o(c, e);
	o(d, e);
	l(e, e);

	B = union(D, B);

	l(a, a);
	o(b, a);
	o(c, a);
	o(d, a);
	l(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	l(d, b);
	o(e, b);
	o(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	o(e, c);
	o(a, d);
	l(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	l(a, e);
	o(b, e);
	o(c, e);
	o(d, e);
	l(e, e);

	A = union(A, C);

	l(a, a);
	o(b, a);
	l(c, a);
	o(d, a);
	l(e, a);
	o(a, b);
	l(b, b);
	o(c, b);
	l(d, b);
	o(e, b);
	l(a, c);
	o(b, c);
	l(c, c);
	o(d, c);
	l(e, c);
	o(a, d);
	l(b, d);
	o(c, d);
	l(d, d);
	o(e, d);
	l(a, e);
	o(b, e);
	l(c, e);
	o(d, e);
	l(e, e);

	// eslint-disable-next-line no-unused-vars
	A = union(B, A);

	l(a, a);
	l(b, a);
	l(c, a);
	l(d, a);
	l(e, a);
	l(a, b);
	l(b, b);
	l(c, b);
	l(d, b);
	l(e, b);
	l(a, c);
	l(b, c);
	l(c, c);
	l(d, c);
	l(e, c);
	l(a, d);
	l(b, d);
	l(c, d);
	l(d, d);
	l(e, d);
	l(a, e);
	l(b, e);
	l(c, e);
	l(d, e);
	l(e, e);
	/* eslint-enable no-multi-assign */
}

for (const [name, DisjointSet] of [
	['LinkedList', LinkedList],
	['LinkedListWithHead', LinkedListWithHead],
	['LinkedListWithHeadAndLength', LinkedListWithHeadAndLength],
	['Forest', Forest],
	['ForestAmortizedRecursive', ForestAmortizedRecursive],
	['ForestAmortizedTwoPasses', ForestAmortizedTwoPasses],
	['ForestAmortizedSplitting', ForestAmortizedSplitting],
	['ForestAmortizedHalving', ForestAmortizedHalving],
]) {
	// Functional

	test(name, macro, DisjointSet.makeset, DisjointSet.union, DisjointSet.find);

	// Prototypal

	const Node = function (value) {
		DisjointSet.Node.call(this, value);
	};

	_prototype(Node, DisjointSet.union, DisjointSet.find);

	const makeset = _makeset(Node);

	const union = (a, b) => a.union(b);

	const find = (node) => node.find();

	test(name + ' (prototype)', macro, makeset, union, find);
}
