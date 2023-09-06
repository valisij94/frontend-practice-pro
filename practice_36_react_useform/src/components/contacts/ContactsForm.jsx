import React from "react";
import styles from './ContactsForm.module.css';

export default function ContactsForm(props) {

    return (
        <form className={styles.contactsFormContainer}>
            <input
                type="text"
                name="lastname"
                placeholder="LastName"
                className={styles.contactsInput}
            />
            <input
                type="text"
                name="firstname"
                placeholder="FirstName"
                className={styles.contactsInput}
            />
            <button
                className={styles.submitButton}
            >
                Send
            </button>
        </form>
    )
}