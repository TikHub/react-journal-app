import Button from "./components/Button";
import JournalItem from "./components/JournalItem";

import "./App.css";
import CardButton from "./components/CardButton/CardButton";

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
		<>
			<Button accent name="Save" />
			<CardButton>
        New memory
			</CardButton>
			<CardButton>
				<JournalItem title={data[0].title} date={data[0].date} text={data[0].text} />
			</CardButton>
			<CardButton>
				<JournalItem title={data[1].title} date={data[1].date} text={data[1].text} />
			</CardButton>
			<CardButton>
				<JournalItem title={data[2].title} date={data[2].date} text={data[2].text} />
			</CardButton>
		</>
	);
}

export default App;
