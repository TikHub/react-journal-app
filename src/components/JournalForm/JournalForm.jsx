import { useState } from "react";

import Button from "../Button";

import styles from "./JournalForm.module.css";
import classNames from "classnames";

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true,
  })
  const addJournalItem = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formProps = Object.fromEntries(formData)

    let isFormValid = true;
    if (!formProps.title?.trim().length) {
      setFormValidState(state => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState(state => ({ ...state, title: true }))
    }

    if (!formProps.post?.trim().length) {
      setFormValidState(state => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setFormValidState(state => ({ ...state, post: true }))
    }

    if (!formProps.date) {
      setFormValidState(state => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState(state => ({ ...state, date: true }))
    }
    if (!isFormValid) return

    onSubmit(formProps)
  };

  return (
    <form className={classNames(styles['journal-form'])} onSubmit={addJournalItem}>
      <input type="text" name="title" className={classNames(styles.input, {
        [styles['invalid']]: !formValidState.title
      })} />
      <input type="date" name="date" className={classNames(styles.input, {
        [styles['invalid']]: !formValidState.title
      })} />
      <input type="text" name="tag" />
      <textarea name="post" className={classNames(styles.input, {
        [styles['invalid']]: !formValidState.title
      })} ></textarea>
      <Button accent name="Save" />
    </form>
  );
}
