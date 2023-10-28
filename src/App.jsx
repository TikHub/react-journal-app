import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";

import Header from "./components/Header";
import JournalList from "./components/JournalList";
import JournalItem from "./components/JournalItem";
import JournalAddButton from "./components/JournalAddButton";
import JournalForm from "./components/JournalForm";
import CardButton from "./components/CardButton";

import "./App.css";
import { useState } from "react";

const INITIAL_DATA = [
	{
		id: 1,
		title: "Title 1",
		date: new Date(),
		text: "Text 1"
	},
	{
		id: 2,
		title: "Title 2",
		date: new Date(),
		text: "Text 2"
	}
];

function App() {
	const [journalItems, setJournalItems] = useState(INITIAL_DATA);

	const addJournalItem = (item) => {
		setJournalItems((oldJournalItem) => [...oldJournalItem, {
			id: Math.max(...oldJournalItem.map(i => i.id)) + 1,
			title: item.title,
			date: new Date(),
			text: item.text,
		}])
	}

	const sortItems = (a, b) => {
		return a.date - b.date < 0 ? 1 : -1;
	}

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton></JournalAddButton>
				<JournalList>
					{
						journalItems
							.sort(sortItems)
							.map(({ id, title, date, text }) => <CardButton key={id}><JournalItem title={title} date={date} text={text} /></CardButton>)
					}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addJournalItem} />
			</Body>
		</div>
	);
}

export default App;
