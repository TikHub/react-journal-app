import "./JournalItem.css";

export default function JournalItem() {
    const title = "Title";
    const date = new Date();
    const text = "Text";

    return <div className="journal-item">
        <h2 className="journal-item__header">{title}</h2>
        <div className="journal-item__body">
            <div className="journal-item__date">{date.toLocaleDateString()}</div>
            <div className="journal-item__text">{text}</div>
        </div>
    </div>;
}