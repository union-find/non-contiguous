export default function rankedtreeunion(a, b) {
	if (a.rank < b.rank) {
		a.parent = b;
		return b;
	}

	if (a.rank > b.rank) {
		b.parent = a;
		return a;
	}

	b.parent = a;
	++a.rank;
	return a;
}
