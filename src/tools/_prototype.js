export default function _prototype(DisjointSet, union, find) {
	DisjointSet.prototype.union = function (other) {
		return union(this, other);
	};

	DisjointSet.prototype.find = function () {
		return find(this);
	};
}
