import React from "react";
import styles from './ContactsForm.module.css';

import { useForm } from 'react-hook-form';

export default function ContactsForm(props) {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    const onFormError = (error) => {
        console.log(error);
    }

    /*
    7. Добавляем валидацию емейла. Рекомендуется это делать через регулярные выражения. Шаблон емейла (максимально упрощенный):
    ```
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    ```
    */

    return (
        <form onSubmit={handleSubmit(onSubmit, onFormError)} className={styles.contactsFormContainer}>
            <input
                type="text"
                name="lastname"
                placeholder="LastName"
                className={styles.contactsInput}

                {...register('lastname', {
                    required: "Please, fill this field!",
                    minLength: {
                        value: 3,
                        message: "Too short!"
                    },
                    maxLength: {
                        value: 12,
                        message: "Too long!"
                    },
                } )}
            />
            { errors.lastname && <p className={styles.errorField}>{errors.lastname.message}</p> }
            <input
                type="text"
                name="firstname"
                placeholder="FirstName"
                className={styles.contactsInput}

                {...register('firstname', {
                    required: "Please, fill this field too!"
                } )}
            />
            { errors.firstname && <p className={styles.errorField}>{errors.firstname.message}</p> }

            <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.contactsInput}

                {...register('email', {
                    required: "Please, fill the email!",
                    pattern: {
                        value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
                        message: "Please enter a valid email!"
                    }
                } )}
            />
            { errors.email && <p className={styles.errorField}>{errors.email.message}</p> }

            <button
                className={styles.submitButton}
            >
                Send
            </button>
        </form>
    )
}