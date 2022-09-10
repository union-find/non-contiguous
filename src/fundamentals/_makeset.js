export default function _makeset(Node) {
	return function (value) {
		return new Node(value);
	};
}
