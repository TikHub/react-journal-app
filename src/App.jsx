import Button from "./components/Button";
import JournalItem from "./components/JournalItem";

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
    <>
      <Button accent name="Save" />
      <JournalItem title={data[0].title} date={data[0].date} text={data[0].text} />
      <JournalItem title={data[1].title} date={data[1].date} text={data[1].text} />
      <JournalItem title={data[2].title} date={data[2].date} text={data[2].text} />
    </>
  );
}

export default App;
