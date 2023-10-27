import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";

import Header from "./components/Header";
import JournalList from "./components/JournalList";
import JournalItem from "./components/JournalItem";
import JournalAddButton from "./components/JournalAddButton";
import JournalForm from "./components/JournalForm";
import CardButton from "./components/CardButton";

import "./App.css";

function App() {
	const data = [
		{
			title: "Title 1",
			date: new Date(),
			text: "Text 1"
		},
		{
			title: "Title 2",
			date: new Date(),
			text: "Text 2"
		},
		{
			title: "Title 3",
			date: new Date(),
			text: "Text 3"
		}
	];

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton></JournalAddButton>
				<JournalList>
					<CardButton>
						<JournalItem title={data[0].title} date={data[0].date} text={data[0].text} />
					</CardButton>
					<CardButton>
						<JournalItem title={data[1].title} date={data[1].date} text={data[1].text} />
					</CardButton>
					<CardButton>
						<JournalItem title={data[2].title} date={data[2].date} text={data[2].text} />
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
