import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";

import Header from "./components/Header";
import JournalList from "./components/JournalList";
import JournalAddButton from "./components/JournalAddButton";
import JournalForm from "./components/JournalForm";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [journalItems, setJournalItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'))
		if (data) {
			setJournalItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (journalItems.length) localStorage.setItem('data', JSON.stringify(journalItems))
	}, [journalItems])

	const addJournalItem = (item) => {
		setJournalItems((oldJournalItem) => [...oldJournalItem, {
			id: oldJournalItem.length > 0 ? Math.max(...oldJournalItem.map(i => i.id)) + 1 : 1,
			title: item.title,
			date: new Date(item.date || Date.now()),
			post: item.post,
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
