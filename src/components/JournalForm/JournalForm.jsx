import Button from "../Button";

import "./JournalForm.css";

export default function JournalForm() {
  const addJournalItem = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formProps = Object.fromEntries(formData)
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="post"></textarea>
      <Button accent name="Save" />
    </form>
  );
}
