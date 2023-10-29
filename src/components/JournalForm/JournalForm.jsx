import { useEffect, useState } from "react";

import Button from "../Button";

import styles from "./JournalForm.module.css";
import classNames from "classnames";


const INITIAL_STATE = {
  title: true,
  post: true,
  date: true,
}

export default function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState(INITIAL_STATE)

  useEffect(() => {
    let timerId;
    if (!formValidState.title || !formValidState.date || !formValidState.post) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE)
      }, 2000)

      return () => clearTimeout(timerId)
    }
  }, [formValidState])

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
      <div>
        <input type="text" name="title" className={classNames(styles['input-title'], {
          [styles['invalid']]: !formValidState.title
        })} />
      </div>

      <div className={classNames(styles["form-row"])}>
        <label htmlFor="date" className={classNames(styles["form-label"])}>
          <img src="/calendar.svg" alt="Calendar icon" />
          <span>Date</span>
        </label>
        <input id="date" type="date" name="date" className={classNames(styles.input, {
          [styles['invalid']]: !formValidState.date
        })} />
      </div>

      <div className={classNames(styles["form-row"])}>
        <label htmlFor="tag" className={classNames(styles["form-label"])}>
          <img src="/folder.svg" alt="Calendar icon" />
          <span>Tag</span>
        </label>
        <input id="tag" type="text" name="tag" className={classNames(styles.input)} />
      </div>

      <textarea name="post" cols="30" rows="10" className={classNames(styles.input, {
        [styles['invalid']]: !formValidState.post
      })} ></textarea>

      <Button accent name="Save" />
    </form>
  );
}
