'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.makeset = exports.union = exports.Node = undefined;
exports.find = find;

var _fundamentals = require('../fundamentals');

var Node = exports.Node = _fundamentals.RankedTreeNode;

var union = exports.union = _fundamentals.rankedtreeunion;

function find(node) {

	var it = void 0,
	    parent = void 0;

	for (it = node; it !== it.parent; it = it.parent) {}

	for (; node.parent !== it; node = parent) {

		parent = node.parent;
		node.parent = it;
	}

	return it;
}

var makeset = exports.makeset = _fundamentals.rankedtreemakeset;

exports.default = {
	Node: Node,
	union: union,
	find: find,
	makeset: makeset
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZHQvRm9yZXN0QW1vcnRpemVkVHdvUGFzc2VzLmpzIl0sIm5hbWVzIjpbImZpbmQiLCJOb2RlIiwidW5pb24iLCJub2RlIiwiaXQiLCJwYXJlbnQiLCJtYWtlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7UUFNZ0JBLEksR0FBQUEsSTs7QUFOaEI7O0FBRU8sSUFBTUMsa0RBQU47O0FBRUEsSUFBTUMscURBQU47O0FBRUEsU0FBU0YsSUFBVCxDQUFnQkcsSUFBaEIsRUFBdUI7O0FBRTdCLEtBQUlDLFdBQUo7QUFBQSxLQUFTQyxlQUFUOztBQUVBLE1BQU1ELEtBQUtELElBQVgsRUFBa0JDLE9BQU9BLEdBQUdDLE1BQTVCLEVBQXFDRCxLQUFLQSxHQUFHQyxNQUE3Qzs7QUFFQSxRQUFRRixLQUFLRSxNQUFMLEtBQWdCRCxFQUF4QixFQUE2QkQsT0FBT0UsTUFBcEMsRUFBNkM7O0FBRTVDQSxXQUFTRixLQUFLRSxNQUFkO0FBQ0FGLE9BQUtFLE1BQUwsR0FBY0QsRUFBZDtBQUVBOztBQUVELFFBQU9BLEVBQVA7QUFFQTs7QUFFTSxJQUFNRSwyREFBTjs7a0JBRVE7QUFDZEwsV0FEYztBQUVkQyxhQUZjO0FBR2RGLFdBSGM7QUFJZE07QUFKYyxDIiwiZmlsZSI6IkZvcmVzdEFtb3J0aXplZFR3b1Bhc3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmtlZFRyZWVOb2RlICwgcmFua2VkdHJlZXVuaW9uICwgcmFua2VkdHJlZW1ha2VzZXQgfSBmcm9tICcuLi9mdW5kYW1lbnRhbHMnXG5cbmV4cG9ydCBjb25zdCBOb2RlID0gUmFua2VkVHJlZU5vZGUgO1xuXG5leHBvcnQgY29uc3QgdW5pb24gPSByYW5rZWR0cmVldW5pb24gO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZCAoIG5vZGUgKSB7XG5cblx0bGV0IGl0ICwgcGFyZW50IDtcblxuXHRmb3IgKCBpdCA9IG5vZGUgOyBpdCAhPT0gaXQucGFyZW50IDsgaXQgPSBpdC5wYXJlbnQgKSA7XG5cblx0Zm9yICggOyBub2RlLnBhcmVudCAhPT0gaXQgOyBub2RlID0gcGFyZW50ICkge1xuXG5cdFx0cGFyZW50ID0gbm9kZS5wYXJlbnQgO1xuXHRcdG5vZGUucGFyZW50ID0gaXQgO1xuXG5cdH1cblxuXHRyZXR1cm4gaXQgO1xuXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlc2V0ID0gcmFua2VkdHJlZW1ha2VzZXQgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdE5vZGUsXG5cdHVuaW9uLFxuXHRmaW5kLFxuXHRtYWtlc2V0XG59IDtcbiJdfQ==