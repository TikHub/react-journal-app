import CardButton from "../CardButton";
import JournalItem from "../JournalItem";

import "./JournalList.css";

export default function JournalList({ items }) {
	if (items.length === 0) {
		return <div>No journal entries yet</div>;
	}

	const sortItems = (a, b) => {
		return a.date - b.date < 0 ? 1 : -1;
	}

	return (
		<div className="journal-list">
			{
				items
					.sort(sortItems)
					.map(({ id, title, date, post }) => <CardButton key={id}><JournalItem title={title} date={date} post={post} /></CardButton>)
			}
		</div>
	);
}