import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";

import Header from "./components/Header";
import JournalList from "./components/JournalList";
import JournalAddButton from "./components/JournalAddButton";
import JournalForm from "./components/JournalForm";

import "./App.css";
import { useState } from "react";

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: "Title 1",
	// 	date: new Date(),
	// 	text: "Text 1"
	// },
	// {
	// 	id: 2,
	// 	title: "Title 2",
	// 	date: new Date(),
	// 	text: "Text 2"
	// }
];

function App() {
	const [journalItems, setJournalItems] = useState(INITIAL_DATA);

	const addJournalItem = (item) => {
		setJournalItems((oldJournalItem) => [...oldJournalItem, {
			id: oldJournalItem.length > 0 ? Math.max(...oldJournalItem.map(i => i.id)) + 1 : 1,
			title: item.title,
			date: new Date(item.date || Date.now()),
			text: item.text,
		}])
	}

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton></JournalAddButton>
				<JournalList items={journalItems} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addJournalItem} />
			</Body>
		</div>
	);
}

export default App;
